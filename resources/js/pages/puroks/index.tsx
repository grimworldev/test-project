import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { DataTable } from "./data-table";
import { columns } from './columns';

export default function index({puroks} : {puroks:any}) {
    console.log(puroks)
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1>This is the Puroks Page</h1>
                <DataTable columns={columns} data={puroks}/>
            </div>
        </AppLayout>
    )
}