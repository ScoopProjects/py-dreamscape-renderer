
import React from 'react';
import { Cuboid } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

interface HeaderProps {
  onOpenDocs: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDocs }) => {
  return (
    <header className="border-b">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2 font-semibold">
          <Cuboid className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline-block">PyDreamscape Renderer</span>
        </div>
        
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" onClick={onOpenDocs}>Documentation</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
