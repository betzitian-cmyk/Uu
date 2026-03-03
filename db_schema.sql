-- Velocity Broker House full database schema (MySQL/MariaDB)
CREATE DATABASE IF NOT EXISTS velocity_broker_house CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE velocity_broker_house;

CREATE TABLE IF NOT EXISTS inventory_vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(160) NOT NULL,
  price DECIMAL(12,2) NOT NULL,
  mileage INT NOT NULL,
  source_dealer VARCHAR(120) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS warranty_plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  plan_name VARCHAR(120) NOT NULL,
  monthly_price DECIMAL(10,2) NOT NULL,
  features TEXT NOT NULL,
  is_featured TINYINT(1) NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS consignment_steps (
  id INT AUTO_INCREMENT PRIMARY KEY,
  step_order INT NOT NULL,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS widget_submissions (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  widget_type VARCHAR(80) NOT NULL,
  full_payload JSON NOT NULL,
  ip_address VARCHAR(45) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_widget_type (widget_type),
  INDEX idx_created_at (created_at)
);

CREATE TABLE IF NOT EXISTS offer_bids (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  widget_submission_id BIGINT NOT NULL,
  vehicle VARCHAR(160) NOT NULL,
  bid_type VARCHAR(40) NOT NULL,
  amount DECIMAL(12,2) NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_offer_bids_submission FOREIGN KEY (widget_submission_id) REFERENCES widget_submissions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS warranty_quotes (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  widget_submission_id BIGINT NOT NULL,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  vehicle VARCHAR(160) NOT NULL,
  mileage INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_warranty_quotes_submission FOREIGN KEY (widget_submission_id) REFERENCES widget_submissions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS financing_applications (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  widget_submission_id BIGINT NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  credit_profile VARCHAR(40) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_financing_submission FOREIGN KEY (widget_submission_id) REFERENCES widget_submissions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS test_drive_bookings (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  widget_submission_id BIGINT NOT NULL,
  name VARCHAR(120) NOT NULL,
  vehicle VARCHAR(160) NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_test_drive_submission FOREIGN KEY (widget_submission_id) REFERENCES widget_submissions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS special_vehicle_requests (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  widget_submission_id BIGINT NOT NULL,
  make_model VARCHAR(160) NOT NULL,
  year_range VARCHAR(40) NOT NULL,
  budget DECIMAL(12,2) NOT NULL,
  features TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_special_vehicle_submission FOREIGN KEY (widget_submission_id) REFERENCES widget_submissions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS service_requests (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  widget_submission_id BIGINT NOT NULL,
  vin VARCHAR(80),
  service_type VARCHAR(80) NOT NULL,
  preferred_date DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_service_submission FOREIGN KEY (widget_submission_id) REFERENCES widget_submissions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS consignment_requests (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  widget_submission_id BIGINT NOT NULL,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  target_vehicle VARCHAR(160) NOT NULL,
  pickup_location VARCHAR(180) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_consignment_submission FOREIGN KEY (widget_submission_id) REFERENCES widget_submissions(id) ON DELETE CASCADE
);

INSERT INTO inventory_vehicles (title, price, mileage, source_dealer) VALUES
('2023 BMW X5 xDrive40i', 51900, 28120, 'Prestige Euro Motors'),
('2022 Ford F-150 Lariat', 42300, 31442, 'Heritage Truck Center'),
('2021 Tesla Model Y Long Range', 34750, 29100, 'Metro EV Exchange'),
('2020 Lexus RX 350', 33800, 44005, 'Cityline Imports'),
('2024 Honda Civic Sport Touring', 29990, 8330, 'Capitol Auto Group'),
('2023 Mercedes-Benz C300', 39200, 19540, 'Royal Star Motors')
ON DUPLICATE KEY UPDATE title = VALUES(title);

INSERT INTO warranty_plans (plan_name, monthly_price, features, is_featured) VALUES
('Silver Drivetrain', 109, 'Engine + transmission coverage|Roadside assistance|Towing reimbursement', 0),
('Gold Essential', 149, 'Powertrain + A/C + electrical|Rental car assistance|24/7 claims support', 1),
('Platinum Exclusionary', 199, 'Comprehensive component protection|High-mileage options|Trip interruption benefits', 0)
ON DUPLICATE KEY UPDATE plan_name = VALUES(plan_name);

INSERT INTO consignment_steps (step_order, title, description) VALUES
(1, 'Discovery', 'Customer identifies vehicle or requests one.'),
(2, 'Auction Verification', 'We validate status via auction platform records.'),
(3, 'Legal Sale Package', 'Buyer/seller docs, taxes, and disclosures are completed.'),
(4, 'Pickup + Delivery', 'Broker picks up and delivers with final checklist.')
ON DUPLICATE KEY UPDATE title = VALUES(title);
