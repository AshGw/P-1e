import { Toaster, toast } from 'sonner';

function ArtBoard() {
  return (
    <>
      <div>This is your Artboard You&apos;re in ready to create</div>
      <div>
        <Toaster />
        <button
          onClick={() =>
            toast.promise(
              async () => {
                await console.log('hi');
              },
              {
                loading: 'Loading...',
                success: () => {
                  return 'This works ?';
                },
                error: 'Error',
              }
            )
          }
        >
          Give me a toast
        </button>
      </div>
    </>
  );
}

export default ArtBoard;
