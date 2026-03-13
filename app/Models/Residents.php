<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Residents extends Model
{
    //
    protected $fillable = [
        'purok_id',
        'first_name',
        'last_name',
        'uuid_name',
    ];

    protected static function booted(){
        static::creating(function ($resident){
            if(!$resident->uuid){
                $resident->uuid = (string) Str::uuid();
            }
        });
    }

    public function getRouteKeyName(){
        return 'uuid';
    }

    public function purok(){
        return $this->belongsTo(Puroks::class);
    }
}
