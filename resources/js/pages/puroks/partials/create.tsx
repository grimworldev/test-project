import { Form, usePage } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store, update } from '@/routes/puroks';
import { type User } from '@/types';

type Purok = {
    id: number;
    name: string;
};

type Props = {
    selectedPurok: Purok | null;
    onClear: () => void;
};

export default function Create({ selectedPurok, onClear }: Props) {

    // const user = usePage.props.auth.user;
    const { props } = usePage<{ auth: { user: User } }>();
    const user = props.auth.user;
    const isEditing = selectedPurok !== null;

    const formProps = isEditing
        ? update.form(selectedPurok.id)   // PUT /puroks/{id}
        : store.form();                    // POST /puroks

    return (
        <Form
            {...formProps}
            resetOnSuccess
            className="flex flex-col gap-6"
        >
            {({ processing, errors }) => (
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">
                            {isEditing ? 'Edit Purok' : 'Purok Name'}
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            autoFocus
                            name="name"
                            placeholder="Enter Purok Name"
                            defaultValue={selectedPurok?.name ?? ''}
                            key={selectedPurok?.id ?? 'new'}
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="flex gap-2">
    
                        <Button type="submit" className="w-full" disabled={processing}>
                            {processing && <Spinner />}
                            {isEditing ? 'Update Purok' : 'Save Purok'}
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