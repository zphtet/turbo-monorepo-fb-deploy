import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-gradient-to-b from-background to-muted p-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Our Platform ( DOCS )
        </h1>
        <p className="text-lg text-muted-foreground">
          Your all-in-one solution for seamless development and collaboration
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Learn More
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">Feature 1</h3>
            <p className="text-sm text-muted-foreground">
              Description of feature 1
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">Feature 2</h3>
            <p className="text-sm text-muted-foreground">
              Description of feature 2
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">Feature 3</h3>
            <p className="text-sm text-muted-foreground">
              Description of feature 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
