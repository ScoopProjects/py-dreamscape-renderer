
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DocumentationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Documentation: React.FC<DocumentationProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>PyDreamscape Documentation</DialogTitle>
          <DialogDescription>
            Learn how to use the 3D engine API and create amazing scenes
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="api">
          <TabsList>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>
          <TabsContent value="api">
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Scene</h3>
                  <p className="text-sm text-muted-foreground">The main container for all 3D objects.</p>
                  <pre className="text-xs bg-muted p-2 rounded mt-1">
{`scene = Scene()
scene.add_mesh(mesh)
scene.add_light(light)
scene.add_camera(camera)
scene.render()
`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Mesh</h3>
                  <p className="text-sm text-muted-foreground">Represents a 3D object with vertices and faces.</p>
                  <pre className="text-xs bg-muted p-2 rounded mt-1">
{`# Create a mesh from vertices and faces
mesh = Mesh(vertices=vertices, faces=faces)
mesh.set_color((r, g, b))  # Values from 0-1
mesh.translate((x, y, z))
mesh.rotate(axis=(x, y, z), angle=degrees)
mesh.scale((x, y, z))
`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Camera</h3>
                  <p className="text-sm text-muted-foreground">Defines the viewpoint for rendering.</p>
                  <pre className="text-xs bg-muted p-2 rounded mt-1">
{`camera = Camera(
    position=(x, y, z),  # Camera position
    target=(x, y, z),    # Look-at point
    up=(0, 1, 0),        # Up vector
    fov=45,              # Field of view in degrees
    aspect=16/9,         # Aspect ratio
    near=0.1,            # Near clipping plane
    far=1000             # Far clipping plane
)
camera.move_to((x, y, z))
camera.look_at((x, y, z))
camera.rotate(pitch, yaw)  # In degrees
`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Light</h3>
                  <p className="text-sm text-muted-foreground">Light sources for illuminating the scene.</p>
                  <pre className="text-xs bg-muted p-2 rounded mt-1">
{`# Create different types of lights
directional_light = Light(
    type="directional",
    direction=(x, y, z),
    color=(r, g, b),
    intensity=0.8
)

point_light = Light(
    type="point",
    position=(x, y, z),
    color=(r, g, b),
    intensity=0.8,
    attenuation=(1.0, 0.09, 0.032)  # constant, linear, quadratic
)

ambient_light = Light(
    type="ambient",
    color=(r, g, b),
    intensity=0.2
)
`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Material</h3>
                  <p className="text-sm text-muted-foreground">Defines surface properties of objects.</p>
                  <pre className="text-xs bg-muted p-2 rounded mt-1">
{`material = Material(
    diffuse=(r, g, b),   # Diffuse color
    specular=(r, g, b),  # Specular highlight color
    shininess=32.0,      # Shininess factor
    ambient=(r, g, b)    # Ambient color
)
mesh.set_material(material)
`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Utility Functions</h3>
                  <p className="text-sm text-muted-foreground">Helper methods for creating common shapes.</p>
                  <pre className="text-xs bg-muted p-2 rounded mt-1">
{`from engine3d.shapes import create_cube, create_sphere, create_cylinder

cube = create_cube(size=2.0)
sphere = create_sphere(radius=1.0, segments=16)
cylinder = create_cylinder(radius=1.0, height=2.0, segments=16)
`}
                  </pre>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="tutorials">
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Getting Started</h3>
                  <p className="text-sm">Learn how to set up your first 3D scene.</p>
                  <ol className="list-decimal list-inside text-sm mt-2 space-y-1">
                    <li>Import the necessary modules</li>
                    <li>Create a scene</li>
                    <li>Add a camera</li>
                    <li>Create and add 3D objects</li>
                    <li>Add lighting</li>
                    <li>Render the scene</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Working with Meshes</h3>
                  <p className="text-sm">Learn how to create and manipulate 3D objects.</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Creating meshes from vertices and faces</li>
                    <li>Using built-in shape functions</li>
                    <li>Transforming objects (translate, rotate, scale)</li>
                    <li>Applying materials</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Lighting Techniques</h3>
                  <p className="text-sm">Master different lighting setups for your scenes.</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Three-point lighting setup</li>
                    <li>Working with shadows</li>
                    <li>Ambient lighting vs. direct lighting</li>
                    <li>Creating mood with colored lights</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Animation Basics</h3>
                  <p className="text-sm">Learn how to create simple animations.</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Animation loops</li>
                    <li>Keyframe animation</li>
                    <li>Physics-based animation</li>
                    <li>Camera animation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Advanced Rendering</h3>
                  <p className="text-sm">Dive into more advanced rendering techniques.</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Texture mapping</li>
                    <li>Normal mapping</li>
                    <li>Reflection and refraction</li>
                    <li>Post-processing effects</li>
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="examples">
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Rotating Cube</h3>
                  <pre className="text-xs bg-muted p-2 rounded mt-1">
{`from engine3d import Scene, Camera
from engine3d.shapes import create_cube
import time
import numpy as np

scene = Scene()
camera = Camera(position=(0, 0, 5))
scene.add_camera(camera)

cube = create_cube(size=1.0)
cube.set_color((0, 0.5, 1.0))
scene.add_mesh(cube)

light = Light(type="directional", direction=(1, 1, 1))
scene.add_light(light)

# Animation loop
for i in range(360):
    angle = i % 360
    cube.rotate(axis=(1, 1, 0), angle=angle)
    scene.render()
    time.sleep(0.016)  # ~60fps
`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Solar System</h3>
                  <pre className="text-xs bg-muted p-2 rounded mt-1">
{`from engine3d import Scene, Camera, Light
from engine3d.shapes import create_sphere
import math

scene = Scene()
camera = Camera(position=(0, 20, 30), target=(0, 0, 0))
scene.add_camera(camera)

# Create the sun
sun = create_sphere(radius=3.0, segments=32)
sun.set_color((1.0, 0.7, 0.0))
sun.set_emission((1.0, 0.7, 0.0), intensity=1.0)
scene.add_mesh(sun)

# Add planets
planets = []
colors = [
    (0.7, 0.7, 0.7),  # Mercury
    (1.0, 0.8, 0.0),  # Venus
    (0.0, 0.3, 1.0),  # Earth
    (1.0, 0.0, 0.0),  # Mars
]

for i in range(4):
    planet = create_sphere(radius=0.5 + i * 0.2, segments=16)
    planet.set_color(colors[i])
    scene.add_mesh(planet)
    planets.append({
        "mesh": planet,
        "distance": 6 + i * 3,
        "speed": 1.0 / (i + 1)
    })

# Add ambient light
ambient = Light(type="ambient", intensity=0.1)
scene.add_light(ambient)

# Animation loop
for frame in range(600):
    # Update planet positions
    for planet in planets:
        angle = frame * planet["speed"]
        x = planet["distance"] * math.cos(math.radians(angle))
        z = planet["distance"] * math.sin(math.radians(angle))
        planet["mesh"].set_position((x, 0, z))
    
    scene.render()
`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Terrain Generation</h3>
                  <pre className="text-xs bg-muted p-2 rounded mt-1">
{`from engine3d import Scene, Camera, Mesh, Light
import numpy as np

# Generate a heightmap
def generate_terrain(size=64, roughness=0.5):
    heightmap = np.zeros((size, size))
    
    # Diamond-square algorithm (simplified)
    heightmap[0, 0] = np.random.uniform(-1, 1)
    heightmap[0, size-1] = np.random.uniform(-1, 1)
    heightmap[size-1, 0] = np.random.uniform(-1, 1)
    heightmap[size-1, size-1] = np.random.uniform(-1, 1)
    
    step = size - 1
    while step > 1:
        half_step = step // 2
        
        # Diamond step
        for y in range(0, size-1, step):
            for x in range(0, size-1, step):
                a = heightmap[y, x]
                b = heightmap[y, x+step]
                c = heightmap[y+step, x]
                d = heightmap[y+step, x+step]
                
                # Center point is average of corners + random offset
                heightmap[y+half_step, x+half_step] = (a+b+c+d)/4 + np.random.uniform(-roughness, roughness)
        
        # Square step
        for y in range(0, size, half_step):
            for x in range((y+half_step)%step, size, step):
                total = 0
                count = 0
                
                if y >= half_step:
                    total += heightmap[y-half_step, x]
                    count += 1
                if y+half_step < size:
                    total += heightmap[y+half_step, x]
                    count += 1
                if x >= half_step:
                    total += heightmap[y, x-half_step]
                    count += 1
                if x+half_step < size:
                    total += heightmap[y, x+half_step]
                    count += 1
                    
                heightmap[y, x] = total/count + np.random.uniform(-roughness, roughness)
                
        step = half_step
        roughness *= 0.5
        
    return heightmap

# Create a terrain mesh from a heightmap
def create_terrain_mesh(heightmap, scale=1.0):
    size = heightmap.shape[0]
    vertices = []
    faces = []
    
    # Create vertices
    for z in range(size):
        for x in range(size):
            y = heightmap[z, x] * scale
            vertices.append([x - size/2, y, z - size/2])
    
    # Create faces (as triangles)
    for z in range(size-1):
        for x in range(size-1):
            i = z * size + x
            faces.append([i, i+1, i+size])
            faces.append([i+1, i+size+1, i+size])
    
    return Mesh(vertices=np.array(vertices), faces=np.array(faces))

# Set up scene
scene = Scene()
camera = Camera(position=(0, 10, 20), target=(0, 0, 0))
scene.add_camera(camera)

# Generate and add terrain
heightmap = generate_terrain(64, 0.5)
terrain = create_terrain_mesh(heightmap, scale=5.0)
terrain.set_color((0.2, 0.7, 0.3))
scene.add_mesh(terrain)

# Add lighting
sun = Light(type="directional", direction=(1, -1, 1), color=(1, 0.9, 0.7))
scene.add_light(sun)
ambient = Light(type="ambient", intensity=0.2)
scene.add_light(ambient)

# Render
scene.render()
`}
                  </pre>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Documentation;
