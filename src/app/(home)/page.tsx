import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-10">
      <div className="flex flex-col gap-6">
        <Button variant='elevated' className="h-12">Google Chrome</Button>
      </div>
      <div className="flex flex-col gap-6">
        <Input placeholder="I am an input" />
      </div>
      <div className="flex flex-col gap-6">
        <Textarea placeholder="I am a text area" />
      </div>
      <div className="flex flex-col gap-y-6">
        <Progress value={20} />
      </div>
      <div className="flex flex-col gap-y-6 h-10">
        <Checkbox id="terms" className="size-8" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
