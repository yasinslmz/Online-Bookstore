USE [KTStore]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 14.01.2024 14:40:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Billing]    Script Date: 14.01.2024 14:40:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Billing](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[country] [nvarchar](max) NOT NULL,
	[firstName] [nvarchar](max) NOT NULL,
	[lastName] [nvarchar](max) NOT NULL,
	[companyName] [nvarchar](max) NOT NULL,
	[address] [nvarchar](max) NOT NULL,
	[apartment] [nvarchar](max) NOT NULL,
	[city] [nvarchar](max) NOT NULL,
	[state] [nvarchar](max) NOT NULL,
	[postcode] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[phone] [nvarchar](max) NOT NULL,
	[isApproved] [bit] NOT NULL,
 CONSTRAINT [PK_Billing] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Blog]    Script Date: 14.01.2024 14:40:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[content] [nvarchar](max) NOT NULL,
	[title] [nvarchar](max) NOT NULL,
	[imagePath] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Blog] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 14.01.2024 14:40:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[slug] [nvarchar](max) NOT NULL,
	[IsStatus] [bit] NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 14.01.2024 14:40:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Price] [decimal](18, 2) NOT NULL,
	[Stock] [int] NOT NULL,
	[CategoryId] [int] NOT NULL,
	[IsStatus] [bit] NOT NULL,
	[imagePath] [nvarchar](max) NOT NULL,
	[Author] [nvarchar](max) NOT NULL,
	[PageCount] [int] NOT NULL,
	[count] [int] NOT NULL,
	[Slug] [nvarchar](max) NOT NULL,
	[Language] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SoldProduct]    Script Date: 14.01.2024 14:40:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SoldProduct](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[BillId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
 CONSTRAINT [PK_SoldProduct] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 14.01.2024 14:40:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[firstName] [nvarchar](max) NOT NULL,
	[lastName] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[password] [nvarchar](max) NOT NULL,
	[userName] [nvarchar](max) NOT NULL,
	[phone] [nvarchar](max) NOT NULL,
	[agreeTerms] [bit] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240113182455_cratee', N'7.0.15')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240114073013_updd', N'7.0.15')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240114074122_son', N'7.0.15')
GO
SET IDENTITY_INSERT [dbo].[Billing] ON 

INSERT [dbo].[Billing] ([id], [userId], [country], [firstName], [lastName], [companyName], [address], [apartment], [city], [state], [postcode], [email], [phone], [isApproved]) VALUES (11, 1, N'Turkey', N'Yasin Çağrı', N'Solmaz', N'University of Kocaeli', N'Mevlana mah.', N'', N'İstanbul', N'Turkey', N'', N'solmazyasin@hotmail.com', N'05522654558', 1)
INSERT [dbo].[Billing] ([id], [userId], [country], [firstName], [lastName], [companyName], [address], [apartment], [city], [state], [postcode], [email], [phone], [isApproved]) VALUES (12, 5, N'Turkey', N'ali', N'demir', N'kocaeli univercity', N'kocaeli', N'', N'kocaeli', N'41', N'', N'ali@gmail.com', N'2332', 1)
INSERT [dbo].[Billing] ([id], [userId], [country], [firstName], [lastName], [companyName], [address], [apartment], [city], [state], [postcode], [email], [phone], [isApproved]) VALUES (13, 5, N'Turkey', N'ali', N'demir', N'University of Kocaeli', N'Mevlana mah.', N'', N'İstanbul', N'Turkey', N'', N'ali@gmail.com', N'0552325238', 1)
SET IDENTITY_INSERT [dbo].[Billing] OFF
GO
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (1, N'Comics Books', N'com', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (2, N'Arts & Photography Books', N'Arts', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (4, N'Business & Money Books', N'Business', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (5, N'Children''s Books', N'Children', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (6, N'Travel Books', N'Travel', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (7, N'Adventure Books', N'Adventure', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (8, N'Science Fiction', N'Science', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (9, N'Mystery & Thriller', N'Mystery', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (10, N'Romance', N'Romance', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (11, N'Fantasy', N'Fantasy', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (12, N'Biography & Memoir', N'Biography', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (13, N'Self-Help', N'Self', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (14, N'Cooking', N'Cooking', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (15, N'History', N'History', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (16, N'Science', N'Science', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (17, N'Health & Fitness', N'Health', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (18, N'Humor', N'Humor', 1)
INSERT [dbo].[Category] ([Id], [Name], [slug], [IsStatus]) VALUES (19, N'Poetry', N'Poetry', 1)
SET IDENTITY_INSERT [dbo].[Category] OFF
GO
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (4, N'Kitap 1', CAST(20.00 AS Decimal(18, 2)), 50, 1, 1, N'https://cdn.kobo.com/book-images/00284104-af1d-45d4-88f5-2a96bfb462d9/353/569/90/False/history-of-comic-books.jpg', N'Yazar 1', 200, 0, N'kitap1', N'Türkçe')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (5, N'Kitap 2', CAST(25.00 AS Decimal(18, 2)), 75, 1, 1, N'https://cdn.kobo.com/book-images/00284104-af1d-45d4-88f5-2a96bfb462d9/353/569/90/False/history-of-comic-books.jpg', N'Yazar 2', 300, 0, N'kitap2', N'İngilizce')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (6, N'Kitap 3', CAST(18.00 AS Decimal(18, 2)), 60, 2, 1, N'https://img.buzzfeed.com/buzzfeed-static/static/2019-11/26/20/asset/0aa9a3ffe2c4/sub-buzz-145-1574801381-7.jpg', N'Yazar 3', 250, 0, N'kitap3', N'Fransızca')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (7, N'Kitap 4', CAST(22.00 AS Decimal(18, 2)), 80, 2, 1, N'https://img.buzzfeed.com/buzzfeed-static/static/2019-11/26/20/asset/0aa9a3ffe2c4/sub-buzz-145-1574801381-7.jpg', N'Yazar 4', 280, 0, N'kitap4', N'Almanca')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (10, N'Kitap 7', CAST(35.00 AS Decimal(18, 2)), 100, 4, 1, N'https://www.foodandwine.com/thmb/mX740zW664DTgICsSniIjrrpuXc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/children-books-about-food-give-a-mouse-a-cookie-FT-BLOG1017-4befa6c4a886416e97f4427ccb6801a8.jpg', N'Yazar 7', 340, 0, N'kitap7', N'Çince')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (11, N'Kitap 8', CAST(40.00 AS Decimal(18, 2)), 120, 4, 1, N'https://www.foodandwine.com/thmb/mX740zW664DTgICsSniIjrrpuXc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/children-books-about-food-give-a-mouse-a-cookie-FT-BLOG1017-4befa6c4a886416e97f4427ccb6801a8.jpg', N'Yazar 8', 380, 0, N'kitap8', N'Japonca')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (12, N'Kitap 9', CAST(19.00 AS Decimal(18, 2)), 55, 2, 1, N'https://img.buzzfeed.com/buzzfeed-static/static/2019-11/26/20/asset/0aa9a3ffe2c4/sub-buzz-145-1574801381-7.jpg', N'Yazar 9', 210, 0, N'kitap9', N'Korece')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (13, N'Kitap 10', CAST(23.00 AS Decimal(18, 2)), 85, 5, 1, N'https://images.squarespace-cdn.com/content/v1/57483e0df699bbec3bf5f6ef/1613467917786-RW4ZZ85DLKQ1QBGLNJRR/best-outdoor-adventure-books.jpg', N'Yazar 10', 290, 0, N'kitap10', N'Hintçe')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (14, N'Kitap 11', CAST(26.00 AS Decimal(18, 2)), 65, 6, 1, N'https://m.media-amazon.com/images/I/81xWLgbAUzS._AC_UF1000,1000_QL80_.jpg', N'Yazar 11', 310, 0, N'kitap11', N'Portekizce')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (15, N'Kitap 12', CAST(32.00 AS Decimal(18, 2)), 95, 12, 1, N'https://cdn.kobo.com/book-images/0e809b81-0b4b-4ed5-814f-80d56b3e6203/1200/1200/False/how-to-help-yourself-with-self-help.jpg', N'Yazar 12', 360, 0, N'kitap12', N'Italyanca')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (16, N'Kitap 13', CAST(38.00 AS Decimal(18, 2)), 110, 16, 1, N'https://mindbodygreen-res.cloudinary.com/image/upload/c_pad,w_480,q_auto,f_auto,fl_lossy/org/o477dwu3wkjd8fho1.png', N'Yazar 13', 400, 0, N'kitap13', N'Arapça')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (17, N'Kitap 14', CAST(17.00 AS Decimal(18, 2)), 45, 4, 1, N'https://www.foodandwine.com/thmb/mX740zW664DTgICsSniIjrrpuXc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/children-books-about-food-give-a-mouse-a-cookie-FT-BLOG1017-4befa6c4a886416e97f4427ccb6801a8.jpg', N'Yazar 14', 180, 0, N'kitap14', N'İbranice')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (18, N'Kitap 15', CAST(21.00 AS Decimal(18, 2)), 105, 11, 1, N'https://m.media-amazon.com/images/I/712BNZEce0L._AC_UF1000,1000_QL80_.jpg', N'Yazar 15', 250, 0, N'kitap15', N'Farsça')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (19, N'Kitap 16', CAST(27.00 AS Decimal(18, 2)), 75, 11, 1, N'https://m.media-amazon.com/images/I/71WMdG33VgL._AC_UF894,1000_QL80_.jpg', N'Yazar 16', 320, 0, N'kitap16', N'Hollandaca')
INSERT [dbo].[Product] ([Id], [Name], [Price], [Stock], [CategoryId], [IsStatus], [imagePath], [Author], [PageCount], [count], [Slug], [Language]) VALUES (20, N'Kitap 17', CAST(33.00 AS Decimal(18, 2)), 80, 12, 1, N'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1679659097-410sd2-izcL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*', N'Yazar 17', 380, 0, N'kitap17', N'İsveççe')
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
SET IDENTITY_INSERT [dbo].[SoldProduct] ON 

INSERT [dbo].[SoldProduct] ([Id], [BillId], [Quantity], [ProductId]) VALUES (19, 11, 3, 13)
INSERT [dbo].[SoldProduct] ([Id], [BillId], [Quantity], [ProductId]) VALUES (20, 11, 2, 10)
INSERT [dbo].[SoldProduct] ([Id], [BillId], [Quantity], [ProductId]) VALUES (21, 12, 2, 4)
INSERT [dbo].[SoldProduct] ([Id], [BillId], [Quantity], [ProductId]) VALUES (22, 12, 3, 15)
INSERT [dbo].[SoldProduct] ([Id], [BillId], [Quantity], [ProductId]) VALUES (23, 13, 8, 5)
SET IDENTITY_INSERT [dbo].[SoldProduct] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([Id], [firstName], [lastName], [email], [password], [userName], [phone], [agreeTerms]) VALUES (1, N'Yasin Çağrı', N'Solmaz', N'solmazyasin@hotmail.com', N'123', N'yasin3', N'0(552) 333 22 58', 1)
INSERT [dbo].[User] ([Id], [firstName], [lastName], [email], [password], [userName], [phone], [agreeTerms]) VALUES (3, N'yas', N'ka', N'asdsad', N'password', N'username', N'asdsd', 1)
INSERT [dbo].[User] ([Id], [firstName], [lastName], [email], [password], [userName], [phone], [agreeTerms]) VALUES (4, N'ali', N'demir', N'asds', N'123', N'aa', N'05524245455', 1)
INSERT [dbo].[User] ([Id], [firstName], [lastName], [email], [password], [userName], [phone], [agreeTerms]) VALUES (5, N'ali', N'demir', N'ali@gmail.com', N'1234', N'alim', N'2323', 1)
SET IDENTITY_INSERT [dbo].[User] OFF
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_Category_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([Id])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_Category_CategoryId]
GO
