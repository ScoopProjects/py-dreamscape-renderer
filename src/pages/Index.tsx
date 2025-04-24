
import { useState } from 'react';
import Header from '@/components/Header';
import CodeEditor from '@/components/CodeEditor';
import Console from '@/components/Console';
import SceneDisplay from '@/components/SceneDisplay';
import Toolbar from '@/components/Toolbar';
import Documentation from '@/components/Documentation';
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>(['> Welcome to PyDreamscape Renderer', '> Ready to execute code...']);
  const [isLoading, setIsLoading] = useState(false);
  const [sceneActive, setSceneActive] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const { toast } = useToast();

  const handleCodeExecute = (code: string) => {
    setIsLoading(true);
    setConsoleOutput(prev => [...prev, '> Executing code...']);
    
    // Simulate code execution
    setTimeout(() => {
      setIsLoading(false);
      setSceneActive(true);
      setConsoleOutput(prev => [
        ...prev,
        '> Scene initialized',
        '> Adding camera at position (0, 0, 5)',
        '> Creating cube mesh with 8 vertices and 6 faces',
        '> Adding directional light',
        '> Rendering complete!',
      ]);
    }, 1500);
  };

  const handleAddObject = (type: string) => {
    toast({
      title: `Added ${type}`,
      description: `A new ${type} has been added to the scene`,
    });
    
    setConsoleOutput(prev => [...prev, `> Added ${type} to scene`]);
  };

  const handleRotate = () => {
    toast({
      title: "Scene rotated",
      description: "Camera has been rotated around the scene",
    });
    
    setConsoleOutput(prev => [...prev, '> Camera rotated by 45 degrees']);
  };

  const handleZoom = (value: number) => {
    const zoomPercent = value;
    setConsoleOutput(prev => [...prev, `> Camera zoom set to ${zoomPercent}%`]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header onOpenDocs={() => setDocsOpen(true)} />
      
      <main className="flex-1 container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">PyDreamscape Renderer</h1>
          <p className="text-lg text-muted-foreground">A powerful 3D engine built in Python</p>
        </div>
        
        <Toolbar onAddObject={handleAddObject} onRotate={handleRotate} onZoom={handleZoom} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <SceneDisplay isLoading={isLoading} sceneActive={sceneActive} />
              </CardContent>
              <CardFooter className="bg-muted/50 text-xs text-muted-foreground">
                Scene view rendered using Python and OpenGL
              </CardFooter>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Console output={consoleOutput} />
              </CardContent>
              <CardFooter className="bg-muted/50 text-xs text-muted-foreground">
                Python console output
              </CardFooter>
            </Card>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="editor">
                <TabsList className="mb-4">
                  <TabsTrigger value="editor">Code Editor</TabsTrigger>
                  <TabsTrigger value="api-ref">API Reference</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="editor">
                  <CodeEditor onExecute={handleCodeExecute} />
                </TabsContent>
                
                <TabsContent value="api-ref">
                  <div className="h-[435px] overflow-y-auto text-sm space-y-4">
                    <div>
                      <h3 className="font-semibold">Core Components</h3>
                      <ul className="list-disc list-inside mt-1">
                        <li><code className="bg-muted px-1 rounded">Scene</code> - Main container for all 3D objects</li>
                        <li><code className="bg-muted px-1 rounded">Camera</code> - Defines view perspective</li>
                        <li><code className="bg-muted px-1 rounded">Mesh</code> - 3D object with vertices and faces</li>
                        <li><code className="bg-muted px-1 rounded">Light</code> - Light sources for the scene</li>
                        <li><code className="bg-muted px-1 rounded">Material</code> - Surface properties</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">Important Methods</h3>
                      <ul className="list-disc list-inside mt-1">
                        <li><code className="bg-muted px-1 rounded">scene.add_mesh(mesh)</code></li>
                        <li><code className="bg-muted px-1 rounded">scene.add_light(light)</code></li>
                        <li><code className="bg-muted px-1 rounded">scene.render()</code></li>
                        <li><code className="bg-muted px-1 rounded">mesh.rotate(axis, angle)</code></li>
                        <li><code className="bg-muted px-1 rounded">mesh.translate(vector)</code></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">Shape Utilities</h3>
                      <ul className="list-disc list-inside mt-1">
                        <li><code className="bg-muted px-1 rounded">create_cube(size=1.0)</code></li>
                        <li><code className="bg-muted px-1 rounded">create_sphere(radius=1.0, segments=16)</code></li>
                        <li><code className="bg-muted px-1 rounded">create_cylinder(radius=1.0, height=2.0)</code></li>
                        <li><code className="bg-muted px-1 rounded">create_plane(width=1.0, height=1.0)</code></li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border rounded bg-muted/50">
                      <p className="text-xs">For full documentation, click on "Documentation" in the header.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="settings">
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-4">Settings will be available in the next update.</p>
                    <div className="p-2 border rounded bg-muted/50">
                      <p className="text-xs">Coming soon: Scene export, rendering options, and performance settings.</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="border-t py-4">
        <div className="container flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            PyDreamscape Renderer v1.0.0
          </div>
          <div className="text-sm text-muted-foreground">
            A 3D engine built with Python
          </div>
        </div>
      </footer>
      
      <Documentation isOpen={docsOpen} onClose={() => setDocsOpen(false)} />
    </div>
  );
};

export default Index;
