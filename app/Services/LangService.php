<?php

namespace App\Services;

class LangService
{
    public function getAllTrans(): array
    {
        $translations = [];
        foreach (config('app.locales') as $group) {
            $translations[$group] = trans($group);
        }

        return $translations;
    }
}
