// External Dependencies
import { Dispatch, SetStateAction } from 'react';
import { ChevronLeft } from 'lucide-react';

// Relative Dependencies
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarToggleProps {
  isOpen: boolean | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
  return (
    <div className=" absolute top-[50%] -right-[16px] z-20">
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-md w-8 h-8"
        variant="outline"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            'h-4 w-4 transition-transform ease-in-out duration-700',
            isOpen === false ? 'rotate-180' : 'rotate-0'
          )}
        />
      </Button>
    </div>
  );
}
