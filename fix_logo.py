from PIL import Image

def make_transparent():
    # Read the newly uploaded image
    img = Image.open("/home/olugbenga-mayowa/.gemini/antigravity/brain/a7686c44-3582-4e34-ba6c-32470a2e596d/media__1782915452301.png").convert("RGBA")
    datas = img.getdata()

    newData = []
    # Using a slightly lower threshold to catch off-white artifacts from jpeg compression if any
    for item in datas:
        # If pixel is mostly white
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            newData.append((255, 255, 255, 0)) # Fully transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save("public/logo-transparent.png", "PNG")
    print("Created transparent logo successfully!")

make_transparent()
