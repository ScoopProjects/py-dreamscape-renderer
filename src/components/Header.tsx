
import React from 'react';
import { Cuboid } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

interface HeaderProps {
  onOpenDocs: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDocs }) => {
  return (
    <header className="dortania-header">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-3 font-semibold">
          <Cuboid className="h-6 w-6 text-dortania-primary" />
          <span className="text-dortania-primary text-lg">PyDreamscape Renderer</span>
        </div>
        
        <div className="flex items-center gap-3 ml-auto">
          <Button 
            variant="ghost" 
            onClick={onOpenDocs}
            className="text-dortania-primary hover:bg-dortania-dark hover:text-dortania-primary/90"
          >
            Documentation
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
