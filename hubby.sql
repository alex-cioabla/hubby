-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Mag 07, 2025 alle 14:44
-- Versione del server: 8.0.30
-- Versione PHP: 8.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hubby`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_03_18_152003_create_personal_access_tokens_table', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'API Token', '1283e9e7ba78afe39e4ee49287353d0173a66fe4122cb9250128a6129aad8c45', '[\"*\"]', NULL, NULL, '2025-04-09 11:52:23', '2025-04-09 11:52:23'),
(2, 'App\\Models\\User', 1, 'token-api', 'ab22112e8b463e283c445f0f831626162303a916cf8d422ce654c2a91aefc940', '[\"*\"]', NULL, '2025-04-17 06:04:27', '2025-04-10 06:04:27', '2025-04-10 06:04:27'),
(3, 'App\\Models\\User', 1, 'token-api', '9cf3c34eadd548064f7578354e3217e1c45d45d3f0ae0ef3e598296fa4d34338', '[\"*\"]', NULL, '2025-04-17 06:08:16', '2025-04-10 06:08:16', '2025-04-10 06:08:16'),
(4, 'App\\Models\\User', 1, 'token-api', 'd41af6a4a394c6c48a3f28b2fc21e214994312b69398dd1a804af04642104f74', '[\"*\"]', NULL, '2025-04-17 06:15:28', '2025-04-10 06:15:28', '2025-04-10 06:15:28'),
(5, 'App\\Models\\User', 1, 'token-api', '4c8442b38d541839cddda2ae118c5fc38e0d79c110871421b5af84ab87a3c640', '[\"*\"]', NULL, '2025-04-17 06:15:52', '2025-04-10 06:15:52', '2025-04-10 06:15:52'),
(6, 'App\\Models\\User', 1, 'token-api', '556b6995c368d19b5cc74b22810aeab0b99d4ae8d54f02870b29cca3f8de9597', '[\"*\"]', NULL, '2025-04-17 06:16:16', '2025-04-10 06:16:16', '2025-04-10 06:16:16'),
(7, 'App\\Models\\User', 1, 'token-api', 'f63bb82f6fd300f6937e364bba2f71e308596aaffb371c68d19ac2704ca8b152', '[\"*\"]', NULL, '2025-04-17 06:16:41', '2025-04-10 06:16:41', '2025-04-10 06:16:41'),
(8, 'App\\Models\\User', 1, 'token-api', '821a54a75ff2e6fb4f636c58a43133f5b48a2456a81df7407cc621e01f1c13ad', '[\"*\"]', NULL, '2025-04-17 06:17:28', '2025-04-10 06:17:28', '2025-04-10 06:17:28'),
(9, 'App\\Models\\User', 1, 'token-api', '3cde5cd6008817668b9df613b87fd72476054589b024d03ed4a0d0b21501cce2', '[\"*\"]', NULL, '2025-04-17 06:26:26', '2025-04-10 06:26:26', '2025-04-10 06:26:26'),
(10, 'App\\Models\\User', 1, 'token-api', '91413aef4092c0a1c9c2e0f2c4bff703cf6fa2f7ce7359c3907b6d10d30b1011', '[\"*\"]', NULL, '2025-04-17 06:26:46', '2025-04-10 06:26:46', '2025-04-10 06:26:46'),
(11, 'App\\Models\\User', 1, 'token-api', 'fe54c7eb60c486d64c1edc924cecb196e73cb5a762e10014bf76308ce44dd956', '[\"*\"]', NULL, '2025-04-17 06:32:09', '2025-04-10 06:32:09', '2025-04-10 06:32:09'),
(12, 'App\\Models\\User', 1, 'token-api', '2b05f484a692f17d2872c7df248bb67c8c24b62fd346b3a0876abb9df72242aa', '[\"*\"]', NULL, '2025-04-17 06:39:12', '2025-04-10 06:39:12', '2025-04-10 06:39:12'),
(13, 'App\\Models\\User', 1, 'token-api', 'faee4356192706dd932ccfae7bb09f05f6a1a19bda735293caa6dfccf42690cf', '[\"*\"]', NULL, '2025-04-17 06:48:53', '2025-04-10 06:48:53', '2025-04-10 06:48:53'),
(14, 'App\\Models\\User', 1, 'token-api', 'af6fb516a9b3837643b15308048c9e24345e7b9c0ccff598d8f7694c6f02f39b', '[\"*\"]', NULL, '2025-04-17 06:49:31', '2025-04-10 06:49:31', '2025-04-10 06:49:31'),
(15, 'App\\Models\\User', 1, 'token-api', 'e55f2f668a05b36fd6cc3d7c73fd8737fa43cecce04933508ac32365dbd7aef5', '[\"*\"]', NULL, '2025-04-17 06:51:29', '2025-04-10 06:51:29', '2025-04-10 06:51:29'),
(16, 'App\\Models\\User', 1, 'token-api', '2375bfb283a800d7210e705bf6f8a5e6abd13c0674052727c33d385eb566e906', '[\"*\"]', NULL, '2025-04-17 06:53:18', '2025-04-10 06:53:18', '2025-04-10 06:53:18'),
(17, 'App\\Models\\User', 1, 'token-api', '9305838bbaa155b510a0e6abc2f4edbe0dd474007e8fe4505ff3a1fd4227d90f', '[\"*\"]', NULL, '2025-04-17 06:54:05', '2025-04-10 06:54:05', '2025-04-10 06:54:05'),
(18, 'App\\Models\\User', 1, 'token-api', '5c06ee85afcfdc0a51dd5796318cbb0cd21fdbce2b506386f978b447e99a4900', '[\"*\"]', NULL, '2025-04-17 06:56:48', '2025-04-10 06:56:48', '2025-04-10 06:56:48'),
(19, 'App\\Models\\User', 1, 'token-api', '5c229f885353357ad1734ac3b81ec605aa40371ad6524d7ce31213e882168d37', '[\"*\"]', NULL, '2025-04-17 06:57:15', '2025-04-10 06:57:15', '2025-04-10 06:57:15'),
(20, 'App\\Models\\User', 1, 'token-api', '022711202e4a80ec15f2b296e55b51013f490c3448f6b5992e2b060dbe65299f', '[\"*\"]', NULL, '2025-04-17 06:57:53', '2025-04-10 06:57:53', '2025-04-10 06:57:53'),
(21, 'App\\Models\\User', 1, 'token-api', 'b0713188177e3278ce091d01bb4c782aee6cfb38ccbc940a22f6bada0007b6bd', '[\"*\"]', NULL, '2025-04-17 06:58:12', '2025-04-10 06:58:12', '2025-04-10 06:58:12'),
(22, 'App\\Models\\User', 1, 'token-api', 'a54afea1f2e2f5f86ce8bccdaeb0d6d34a49c5616c07df237209c3d5460d45b9', '[\"*\"]', NULL, '2025-04-17 06:58:47', '2025-04-10 06:58:47', '2025-04-10 06:58:47'),
(23, 'App\\Models\\User', 1, 'token-api', '28029935f2d733bb69727d8cded8b3e654e182abbce3df2122c66a39bbe258ed', '[\"*\"]', NULL, '2025-04-17 06:59:06', '2025-04-10 06:59:06', '2025-04-10 06:59:06'),
(24, 'App\\Models\\User', 1, 'token-api', '45bf446a60f8828b045b6d27d51bb12cda68d838f0d83f6080deecf7693f4485', '[\"*\"]', NULL, '2025-04-17 06:59:52', '2025-04-10 06:59:52', '2025-04-10 06:59:52'),
(25, 'App\\Models\\User', 1, 'token-api', '06b7cf557508ca605a21f43773471b8de3e9815348bf67618db2f42feacf1fe3', '[\"*\"]', NULL, '2025-04-17 07:03:22', '2025-04-10 07:03:22', '2025-04-10 07:03:22'),
(26, 'App\\Models\\User', 1, 'token-api', '1ad17363ee377b4979519f395358c214b23afe0af002c109305be57e0e28d8b8', '[\"*\"]', NULL, '2025-04-17 07:24:13', '2025-04-10 07:24:13', '2025-04-10 07:24:13'),
(27, 'App\\Models\\User', 1, 'token-api', 'bcf1acda7591d34742f739ab5e4738badde9a1f4923e9e1221414bdffe3657e0', '[\"*\"]', NULL, '2025-04-17 07:24:23', '2025-04-10 07:24:23', '2025-04-10 07:24:23'),
(28, 'App\\Models\\User', 1, 'token-api', '9ec6e2ece1ae7768841fde8dd4eb7f97d59d2d52b9920d2a0ca3dffd46655bb4', '[\"*\"]', NULL, '2025-04-17 07:24:45', '2025-04-10 07:24:45', '2025-04-10 07:24:45'),
(29, 'App\\Models\\User', 1, 'token-api', 'a60dbd8fffc6d3b724887e71dda0ee079739a60e716c4915c4de455d33343a0d', '[\"*\"]', NULL, '2025-04-17 07:26:43', '2025-04-10 07:26:43', '2025-04-10 07:26:43'),
(30, 'App\\Models\\User', 1, 'token-api', '1fa577babbd9f4e331da48ae1dfb3c3629f1ac77045d1b83f3614b9af6f554d7', '[\"*\"]', NULL, '2025-04-17 07:26:58', '2025-04-10 07:26:58', '2025-04-10 07:26:58'),
(31, 'App\\Models\\User', 1, 'token-api', '663f188872d2904a50721998afac5ddd51a5480082d66a01a487424322ad2194', '[\"*\"]', NULL, '2025-04-17 07:40:41', '2025-04-10 07:40:41', '2025-04-10 07:40:41'),
(32, 'App\\Models\\User', 1, 'token-api', '7a3aa1a0f05b634623a4baf8bb768318961b56e69ec9f96b3a30602021781fb7', '[\"*\"]', NULL, '2025-04-17 07:50:30', '2025-04-10 07:50:30', '2025-04-10 07:50:30'),
(33, 'App\\Models\\User', 1, 'token-api', '44c76867a83ed92539a19610dfb50872577286e5ba743eaba37192f76dd4f91d', '[\"*\"]', NULL, '2025-04-17 10:54:44', '2025-04-10 10:54:44', '2025-04-10 10:54:44'),
(34, 'App\\Models\\User', 1, 'token-api', 'f9a9f8e0aae6cb2b6a130f4d1db3dc1dd05804057f59a65c28d9ac54bca2eac2', '[\"*\"]', NULL, '2025-04-14 05:29:24', '2025-04-11 05:29:24', '2025-04-11 05:29:24'),
(44, 'App\\Models\\User', 12, 'PAT', '93aab659fc66af922f8d82bbdc1d3fcba7321392cdac9ef864733144546bc36d', '[\"*\"]', NULL, '2025-05-05 06:04:46', '2025-04-28 06:04:46', '2025-04-28 06:04:46'),
(46, 'App\\Models\\User', 1, 'PAT', '819f68886d0632fad49af323d468d820c2538c3620368fe75d9a494f8c21d1e9', '[\"*\"]', NULL, '2025-05-12 07:04:51', '2025-05-05 07:04:51', '2025-05-05 07:04:51');

-- --------------------------------------------------------

--
-- Struttura della tabella `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('lnWWYVSiQinzu6CxZtf3S0aKoUSP9ia7vHsAs7bx', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOEdvZkRqck9ZV1hxdGdxVEpKUzNrbERyVnhxemhjdjNIdGhZbWgzNyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9maWxlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1746610829),
('MhHU1h6DXIBWKp3EBqSgTiCyubZY5O4PfSYbfMSo', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTHVsdmNrWTg4V1JwMXJyR2xpdjZjWTI0dzVyaXZaMmZrOGhudHE1bSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9maWxlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1746525299),
('QGyPRW1VZckcBrIEbaG65evFgfqrVI33jgseIaE4', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSm1Ec1hBemduNGxlanFRQTZiaDhzU2Z6WjhIaEdkdGw2bXhKcnoxeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9maWxlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1746542040);

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Mihai Alexandru Cioabla', 'alex.cioabla@outlook.it', NULL, '$2y$12$zVYnkvVoLVfb1QISMKzDouCnLDwrHcprcFKF/8ipiOemVKK7efZB.', 'wTolyKoezRBRVVOuWhXxdqonS8NpA6GsvyBfPjbF9VCZSjiniE2SQP3DbjCE', '2025-02-21 13:03:06', '2025-04-15 12:40:33'),
(13, 'alex', 'alex.cioabla@outlook.com', NULL, '$2y$12$NY2VyHOiDEuL.0heHly1V.c2DqSf9V7JVqLsz7K8w0tPtOzoDTqrq', NULL, '2025-04-28 07:18:36', '2025-05-05 06:21:33');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indici per le tabelle `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indici per le tabelle `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indici per le tabelle `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indici per le tabelle `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indici per le tabelle `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indici per le tabelle `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
