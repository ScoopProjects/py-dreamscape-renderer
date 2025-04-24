
import React from 'react';
import { Cube } from 'lucide-react';

interface SceneDisplayProps {
  isLoading: boolean;
  sceneActive: boolean;
}

const SceneDisplay: React.FC<SceneDisplayProps> = ({ isLoading, sceneActive }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-md font-medium">3D Scene Preview</h3>
      <div className="scene-canvas relative">
        {isLoading ? (
          <div className="canvas-placeholder">
            <div className="animate-spin text-primary mb-2">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <div>Rendering scene...</div>
          </div>
        ) : sceneActive ? (
          <div className="canvas-placeholder">
            <div className="rotate-slow mb-2">
              <Cube className="w-32 h-32 text-primary" />
            </div>
            <div>Scene rendered successfully</div>
          </div>
        ) : (
          <div className="canvas-placeholder">
            <Cube className="w-32 h-32 mb-2 text-muted-foreground" />
            <div>Run the code to see your 3D scene</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SceneDisplay;
