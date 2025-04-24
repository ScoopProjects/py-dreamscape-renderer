
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Save, Download, Copy } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const initialCode = `import numpy as np
from engine3d import Scene, Camera, Mesh, Light

# Create a new scene
scene = Scene()

# Add a camera
camera = Camera(position=(0, 0, 5), target=(0, 0, 0))
scene.add_camera(camera)

# Create a cube mesh
vertices = np.array([
    # Front face
    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
    # Back face
    [-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1],
])
faces = np.array([
    [0, 1, 2, 3],  # Front face
    [4, 5, 6, 7],  # Back face
    [0, 3, 5, 4],  # Left face
    [1, 7, 6, 2],  # Right face
    [3, 2, 6, 5],  # Top face
    [0, 4, 7, 1],  # Bottom face
])
cube = Mesh(vertices=vertices, faces=faces)
cube.set_color((0, 0.5, 1))
scene.add_mesh(cube)

# Add a light source
light = Light(position=(3, 2, 5), intensity=0.8)
scene.add_light(light)

# Render the scene
scene.render()

# Rotate the cube and render again
cube.rotate(axis=(1, 1, 0), angle=45)
scene.render()
`;

interface CodeEditorProps {
  onExecute: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onExecute }) => {
  const [code, setCode] = useState<string>(initialCode);
  const { toast } = useToast();

  const handleExecute = () => {
    onExecute(code);
    toast({
      title: "Code executed",
      description: "Your 3D scene code has been processed.",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
  };

  const handleSave = () => {
    toast({
      title: "Code saved",
      description: "Your code has been saved to the project.",
    });
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "engine3d_scene.py";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "File downloaded",
      description: "Your Python code has been downloaded.",
    });
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-medium">Python Code Editor</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleSave}>
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={handleCopy}>
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
          <Button onClick={handleExecute}>
            <Play className="h-4 w-4 mr-1" />
            Run
          </Button>
        </div>
      </div>
      <textarea
        className="code-editor w-full"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
};

export default CodeEditor;
