import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={cn("max-w-full  ", className)}>{children}</div>;
};

export default Container;
