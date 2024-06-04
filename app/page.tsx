import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>AUTH APP</h1>
      <p className="font-semibold text-fuchsia-300">I AM EDILY</p>
      <Button size='lg' variant='outline' className="font-semibold text-fuchsia-300">
        Click me
      </Button>
      <Button size='lg' variant='custom'>
        Click me 2
      </Button>
    </div>
    
  );
}
