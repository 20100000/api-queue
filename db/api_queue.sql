-- schema.sql
CREATE DATABASE IF NOT EXISTS api_queue;
USE api_queue;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_insert` datetime DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
CREATE TABLE IF NOT EXISTS `suppliers` (
  `id` int(11) NOT NULL,
  `name_supplier` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `doc` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_insert` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
ALTER TABLE `products` ADD PRIMARY KEY (`id`);
ALTER TABLE `suppliers` ADD PRIMARY KEY (`id`);
ALTER TABLE `products` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
ALTER TABLE `suppliers` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;
