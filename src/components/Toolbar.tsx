
import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Cube, Sphere, Cylinder, Sun, RotateCcw, ZoomIn } from 'lucide-react';

interface ToolbarProps {
  onAddObject: (type: string) => void;
  onRotate: () => void;
  onZoom: (value: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddObject, onRotate, onZoom }) => {
  return (
    <div className="p-2 bg-muted rounded-lg flex flex-wrap gap-2 items-center">
      <div className="mr-2 text-sm font-medium">Objects:</div>
      <Button variant="outline" size="sm" onClick={() => onAddObject('cube')} className="flex items-center gap-1">
        <Cube className="h-4 w-4" /> Cube
      </Button>
      <Button variant="outline" size="sm" onClick={() => onAddObject('sphere')} className="flex items-center gap-1">
        <Sphere className="h-4 w-4" /> Sphere
      </Button>
      <Button variant="outline" size="sm" onClick={() => onAddObject('cylinder')} className="flex items-center gap-1">
        <Cylinder className="h-4 w-4" /> Cylinder
      </Button>
      
      <div className="h-6 w-px bg-border mx-2"></div>
      
      <div className="mr-2 text-sm font-medium">Light:</div>
      <Select defaultValue="directional" onValueChange={(value) => console.log(`Light type changed: ${value}`)}>
        <SelectTrigger className="w-[130px] h-8">
          <SelectValue placeholder="Light Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="directional">Directional</SelectItem>
          <SelectItem value="point">Point</SelectItem>
          <SelectItem value="ambient">Ambient</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <Sun className="h-4 w-4" /> Add Light
      </Button>
      
      <div className="h-6 w-px bg-border mx-2"></div>
      
      <div className="mr-2 text-sm font-medium">Camera:</div>
      <Button variant="outline" size="sm" onClick={onRotate} className="flex items-center gap-1">
        <RotateCcw className="h-4 w-4" /> Rotate
      </Button>
      <div className="flex items-center gap-2">
        <ZoomIn className="h-4 w-4" />
        <Slider 
          defaultValue={[50]} 
          max={100} 
          step={1}
          className="w-24"
          onValueChange={(value) => onZoom(value[0])} 
        />
      </div>
    </div>
  );
};

export default Toolbar;
