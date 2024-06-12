CREATE TABLE alcohols (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  image_url VARCHAR(200)
);

ALTER TABLE alcohols ADD CONSTRAINT unique_name UNIQUE (name);

INSERT INTO alcohols (name, image_url) VALUES
  ('Whiskey', 'https://m.media-amazon.com/images/I/81C9nWCPXgL.jpg'),
  ('Vodka', 'https://www.gourmetencasa-tcm.com/19807/ciroc-vodka-1l.jpg'),
  -- ('Rum', 'https://cdn.selection-prestige.de/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/1/0/101597_bumbu_the_original_700.jpg'),
  -- ('Tequila', 'https://m.media-amazon.com/images/I/71nhs-j4SRL._AC_UF894,1000_QL80_.jpg'),
  -- ('Gin', 'https://www.jardinvouvrillon.fr/340-medium_default/gin-citadelle.jpg'),
  -- ('Beer', 'https://www.unitedbreweries.com/images/our-brands/heineken.jpg'),
  -- ('Wine', 'https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548'),
  -- ('Absinthe', 'https://cdn2.yopongoelhielo.com/694/calavera-vert-899.jpg'),
  -- ('Sake', 'https://www.lupicia.fr/images/231/p/231_342730_max.jpg'),
  ('Cognac', 'https://www.vinsetchampagnes.fr/12276-large/henessy-cognac-vs.jpg');