import { redirect } from "next/navigation";

export default function AdminAssignTasksRedirectPage() {
  redirect("/admin/tasks");
}
