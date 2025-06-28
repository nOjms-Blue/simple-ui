import os
import sys
import shutil

def apply(project_path: str):
	components_path = os.path.join(project_path, "src", "simple-ui")
	os.makedirs(components_path, exist_ok=True)
	ls = os.listdir(".")
	for name in ls:
		if name.startswith("."):
			continue
		
		if os.path.isdir(name):
			shutil.copytree(name, os.path.join(components_path, name))
		else:
			if name.endswith(".py"):
				continue
			shutil.copy(name, os.path.join(components_path, name))

if __name__ == "__main__":
	if len(sys.argv) < 2:
		print("Usage: python apply.py <path>")
		sys.exit(1)
	apply(sys.argv[1])
