import AppLayout from "@/layouts/app-layout";
import { Head, router } from "@inertiajs/react";
import { DataTable } from "./data-table";
import { getColumns } from './columns';
import Create from "./partials/create";
import { useState } from "react";
import { index } from '@/routes/puroks';

type Purok = {
    id: number;
    name: string;
};

type Resident = {
    id: number;
    uuid: string;
    purok_id: number;
    first_name: string;
    last_name: string;
};

export default function Index({ puroks, residents }: { puroks: Purok[], residents:Resident[], }) {

    const [selectedPurok, setSelectedPurok] = useState<Purok | null>(null);

    const columns = getColumns((purok) => setSelectedPurok(purok));

    function handleFilterChange(value: string) {
        router.get(index(), { filter: value }, { // 👈 Wayfinder route
            preserveState: true,
            replace: true,
        });
    }


    return (
        <AppLayout>
            <Head title="Puroks" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="w-full p-4">
                    <Create
                        puroks={puroks}
                        selectedPurok={selectedPurok}
                        onClear={() => setSelectedPurok(null)}
                    />
                </div>
                <div className="w-full p-4">
                    <DataTable columns={columns} data={residents} onFilterChange={handleFilterChange}/>
                </div>
            </div>
        </AppLayout>
    );
}