import { Form, usePage } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store, update } from '@/routes/residents';
import { type User } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Purok = {
    id: number;
    name: string;
};

type Props = {
    puroks: Purok[];           // 👈 added
    selectedPurok: Purok | null;
    onClear: () => void;
};

export default function Create({ puroks, selectedPurok, onClear }: Props) {
    const { props } = usePage<{ auth: { user: User } }>();
    const user = props.auth.user;
    const isEditing = selectedPurok !== null;

    const formProps = isEditing
        ? update.form(selectedPurok.id)
        : store.form();

    return (
        <Form
            {...formProps}
            resetOnSuccess
            className="flex flex-col gap-6"
        >
            {({ processing, errors }) => (
                <div className="grid grid-cols-3 gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="first_name">First Name</Label>
                        <Input
                            id="first_name"
                            type="text"
                            autoFocus
                            name="first_name"
                            placeholder="Enter First Name"
                        />
                        <InputError message={errors.first_name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input
                            id="last_name"
                            type="text"
                            name="last_name"
                            placeholder="Enter Last Name"
                        />
                        <InputError message={errors.last_name} />
                    </div>

                    {/* 👇 Purok dropdown */}
                    {/* 👇 Purok dropdown */}
                    <div className="grid gap-2">
                        <Label htmlFor="purok_id">Purok</Label>
                        <Select
                            name="purok_id"
                            key={selectedPurok?.id ?? 'new'}
                            defaultValue={selectedPurok?.id?.toString() ?? ''}
                        >
                            <SelectTrigger id="purok_id" className='w-full'>
                                <SelectValue placeholder="Select a Purok" />
                            </SelectTrigger>
                            <SelectContent>
                                {puroks.map((purok) => (
                                    <SelectItem key={purok.id} value={purok.id.toString()}>
                                        {purok.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={errors.purok_id} />
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit" className="w-full" disabled={processing}>
                            {processing && <Spinner />}
                            {isEditing ? 'Update Resident' : 'Save Resident'}
                        </Button>
                        {isEditing && (
                            <Button type="button" variant="outline" onClick={onClear}>
                                Cancel
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </Form>
    );
}