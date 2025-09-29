<?php

namespace App\Services;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class IGBDService
{
    protected $clientId;
    protected $accessToken;

    public function __construct()
    {
        $this->clientId = config('services.igdb.client_id');
        $this->accessToken = config('services.igdb.access_token');
    }

    public function getGames(): array {

        $response = Http::withHeaders([
            'Client-ID' => $this->clientId,
            'Authorization' => 'Bearer '.$this->accessToken,

        ])->withBody(
            "fields name, cover.url, summary; limit 10;",
            'text/plain'
        )->post('https://api.igdb.com/v4/games');

        return $response->json();
    }

    public function searchGames($search = ''): array {

        $response = Http::withHeaders([
            'Client-ID' => $this->clientId,
            'Authorization' => 'Bearer '.$this->accessToken
        ])->withBody(
            `search \"$search\"; fields alternative_name,name;`,
            'text/plain'
        )->post('https://api.igdb.com/v4/search');

        return $response->json();
    }
}
