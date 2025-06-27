USE InfoscreenDB;
GO

INSERT INTO slides (componentName, expirationDate, isActive)
VALUES
('app-laeringsmaal', NULL, 1),
('app-weather', NULL, 1),
('app-rejseplanen', NULL, 1),
('app-feedback', GETDATE(), 0);
GO

INSERT INTO calendarEvents (theDate, theMessage, slideID)
VALUES
('2025-06-25', 'Idræt', NULL),
('2025-06-27', 'Auditoriet ved kantinen: Gennemgang af Digitale Informationstavler Kl.: 10:00', NULL),
('2025-06-30', 'GameJam: Afslut arbejdet.', NULL),
('2025-07-02', 'Idræt', NULL),
('2025-07-02', 'GameJam: Fremlæggelse.', NULL),
('2025-07-03', 'Sommerafslutnings arrangement', NULL);

GO