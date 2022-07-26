export interface TodoType {
  title: string;
  priority: "urgent" | "new" | "default";
  isCompleted: boolean;
}
