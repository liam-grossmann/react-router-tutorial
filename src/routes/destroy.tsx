import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }: { params: any }) {
    await deleteContact(params.contactId);
    return redirect("/");
}