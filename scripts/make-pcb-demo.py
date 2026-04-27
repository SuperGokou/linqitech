"""Generate the PCB demo image with 2 simulated defects (black marks)
for the AI scan widget on the home page.
"""
from PIL import Image, ImageDraw, ImageFilter
from pathlib import Path

SRC = Path("C:/Users/xiaming/Desktop/what-is-a-pcb.png")
OUT = Path("C:/Users/xiaming/Desktop/linqi-landing/assets/pcb_demo.jpg")

im = Image.open(SRC).convert("RGB")

# upscale to 1600 wide, preserving aspect (~ 16:10)
target_w = 1600
ratio = target_w / im.width
im = im.resize((target_w, int(im.height * ratio)), Image.LANCZOS)

draw = ImageDraw.Draw(im)
W, H = im.size
print("PCB canvas:", W, "x", H)

# ----- Defect 1: jagged scratch across upper-right traces ------------------
# bbox in pixels: ~ (1060, 190) to (1320, 270)
scratch = [
    (1080, 250), (1110, 220), (1145, 240),
    (1180, 200), (1220, 230), (1260, 195), (1300, 218),
]
# soft shadow underneath
draw.line(scratch, fill=(0, 0, 0), width=10)
# main scratch
draw.line(scratch, fill=(8, 8, 8), width=5)
# small breakage marks orthogonal to the scratch
for x, y in [(1110, 220), (1180, 200), (1260, 195)]:
    draw.line([(x - 4, y - 6), (x + 4, y + 6)], fill=(0, 0, 0), width=2)

# ----- Defect 2: dark contamination / missing pad near lower-center --------
# bbox in pixels: ~ (650, 720) to (770, 830)
spot = (705, 775)
# main blob
draw.ellipse([spot[0] - 26, spot[1] - 22, spot[0] + 26, spot[1] + 22], fill=(8, 8, 8))
# splash droplet (asymmetric)
draw.ellipse([spot[0] - 8, spot[1] - 38, spot[0] + 14, spot[1] - 14], fill=(15, 15, 15))
draw.ellipse([spot[0] + 18, spot[1] + 2,  spot[0] + 36, spot[1] + 18], fill=(15, 15, 15))

# very slight blur to make defects feel embedded in the image
im_blur_mask = Image.new("L", im.size, 0)
mb = ImageDraw.Draw(im_blur_mask)
mb.line(scratch, fill=255, width=14)
mb.ellipse([spot[0] - 32, spot[1] - 30, spot[0] + 36, spot[1] + 26], fill=255)
im_blur = im.filter(ImageFilter.GaussianBlur(radius=0.6))
im = Image.composite(im_blur, im, im_blur_mask)

im.save(OUT, "JPEG", quality=88, optimize=True)
import os
print(f"saved {OUT.name}: {os.path.getsize(OUT) / 1024:.0f} KB")
