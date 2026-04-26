import os

folder = './GoreDesno'

files = [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))]
files.sort()

for i, filename in enumerate(files, start=1):
    name, ext = os.path.splitext(filename)
    new_name = f"{i}{ext}"

    old_path = os.path.join(folder, filename)
    new_path = os.path.join(folder, new_name)

    os.rename(old_path, new_path)