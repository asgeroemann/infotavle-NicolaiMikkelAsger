USE InfoscreenDB;
GO

INSERT INTO slides (componentName, expirationDate, isActive)
VALUES
('app-laeringsmaal', GETDATE(), 1),
('app-weather', NULL, 1),
('app-rejseplanen', GETDATE(), 1),
('app-feedback', GETDATE(), 0);
GO

INSERT INTO calendarEvents (theDate, theMessage, slideID)
VALUES
('2025-06-25', 'Idr�t', NULL),
('2025-06-27', 'Auditoriet ved kantinen: Gennemgang af Digitale Informationstavler Kl.: 10:00', NULL),
('2025-06-30', 'GameJam: Afslut arbejdet.', NULL),
('2025-07-02', 'Idr�t', NULL),
('2025-07-02', 'GameJam: Freml�ggelse.', NULL),
('2025-07-03', 'Sommerafslutnings arrangement', NULL);

GO