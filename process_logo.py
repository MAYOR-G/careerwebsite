from PIL import Image

def process():
    img = Image.open("/home/olugbenga-mayowa/.gemini/antigravity/brain/7e877355-88c7-49c4-890a-70fe88bfc18e/media__1782916461178.png").convert("RGBA")
    datas = img.getdata()
    newData = []
    
    for item in datas:
        r, g, b, a = item
        # Calculate max and min of RGB
        mx = max(r, g, b)
        mn = min(r, g, b)
        
        # If it's very light and has very low saturation (greyscale), it's the checkerboard background.
        if mn > 180 and (mx - mn) < 20:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save("public/logo-transparent.png", "PNG")
    print("Saved public/logo-transparent.png")

process()
