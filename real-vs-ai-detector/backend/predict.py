import sys
import torch
from torchvision import transforms
from PIL import Image
import json

image_path = sys.argv[1]

model = torch.load("model.pth", map_location=torch.device('cpu'), weights_only=False)
model.eval()

transform = transforms.Compose([
    transforms.Resize((224,224)),
    transforms.ToTensor()
])

image = Image.open(image_path).convert("RGB")
image = transform(image).unsqueeze(0)

with torch.no_grad():
    output = model(image)
    prob = torch.softmax(output, dim=1)
    confidence, predicted = torch.max(prob, 1)

label = "Fake" if predicted.item() == 1 else "Real"

print(json.dumps({
    "prediction": label,
    "confidence": float(confidence.item()*100)
}))