from PIL import Image
import os

for filename in ["logo.png", "logo-new.png", "logo-final.png"]:
    try:
        img = Image.open(f"public/{filename}").convert("RGBA")
        has_alpha = False
        fake_checkerboard = False
        
        # Check if it has actual transparent pixels
        extrema = img.getextrema()
        if extrema[3][0] < 255:
            has_alpha = True
            
        print(f"{filename}: has_alpha={has_alpha}")
    except Exception as e:
        print(f"{filename}: Error {e}")
