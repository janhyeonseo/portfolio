interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block rounded-md bg-surface px-2.5 py-1 text-sm text-foreground">
      {label}
    </span>
  );
}
