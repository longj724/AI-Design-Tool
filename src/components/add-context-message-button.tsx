// External Dependencies
import { Dispatch, SetStateAction } from 'react';
import { LoaderCircle, PlusCircle } from 'lucide-react';
import { useParams } from 'next/navigation';

// Relative Dependencies
import { Button } from './ui/button';

type Props = {
  isNewContextMessageLoading: boolean;
  setIsPlacingContextMessage: Dispatch<SetStateAction<boolean>>;
};

const AddMessageButton = ({
  isNewContextMessageLoading,
  setIsPlacingContextMessage,
}: Props) => {
  const { spaceId } = useParams();

  return (
    <div className="absolute right-[50px] top-[72px] hover:cursor-pointer z-50">
      <Button
        onClick={() => setIsPlacingContextMessage(true)}
        disabled={!spaceId}
      >
        {isNewContextMessageLoading ? (
          <LoaderCircle className="size-6 animate-spin text-muted-foreground mr-2" />
        ) : (
          <PlusCircle className="h-6 w-6 mr-2" />
        )}
        Add Context
      </Button>
    </div>
  );
};

export default AddMessageButton;
