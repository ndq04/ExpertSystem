CREATE DATABASE  IF NOT EXISTS `showroom` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `showroom`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: showroom
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id_Color` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_Color`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES ('C_C','Cam'),('C_De','Đen'),('C_Do','Đỏ'),('C_T','Trắng'),('C_X','Xanh');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id_Company` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_Company`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES ('CO_B','BMW'),('CO_Ho','Honda'),('CO_Hy','Hyundai'),('CO_K','Kia'),('CO_M','Mercedes'),('CO_T','Toyata'),('CO_V','Vinfast');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gioitinh`
--

DROP TABLE IF EXISTS `gioitinh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gioitinh` (
  `id_GioiTinh` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_GioiTinh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gioitinh`
--

LOCK TABLES `gioitinh` WRITE;
/*!40000 ALTER TABLE `gioitinh` DISABLE KEYS */;
INSERT INTO `gioitinh` VALUES ('G1','Nam'),('G2','Nữ');
/*!40000 ALTER TABLE `gioitinh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nghenghiep`
--

DROP TABLE IF EXISTS `nghenghiep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nghenghiep` (
  `id_nghenghiep` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_nghenghiep`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nghenghiep`
--

LOCK TABLES `nghenghiep` WRITE;
/*!40000 ALTER TABLE `nghenghiep` DISABLE KEYS */;
INSERT INTO `nghenghiep` VALUES ('N1','Công nhân/Viên chức'),('N2','Bác sĩ'),('N3','Nhân viên văn phòng'),('N4','Doanh nhân');
/*!40000 ALTER TABLE `nghenghiep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oto`
--

DROP TABLE IF EXISTS `oto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oto` (
  `id_OTo` varchar(50) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `id_Color` varchar(50) DEFAULT NULL,
  `id_Company` varchar(50) DEFAULT NULL,
  `id_Type` varchar(50) DEFAULT NULL,
  `id_Price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_OTo`),
  KEY `FK_Type_idx` (`id_Type`),
  KEY `FK_Color_idx` (`id_Color`),
  KEY `FK_Company_idx` (`id_Company`),
  KEY `FK_Price_idx` (`id_Price`),
  CONSTRAINT `FK_Color` FOREIGN KEY (`id_Color`) REFERENCES `color` (`id_Color`),
  CONSTRAINT `FK_Company` FOREIGN KEY (`id_Company`) REFERENCES `company` (`id_Company`),
  CONSTRAINT `FK_Price` FOREIGN KEY (`id_Price`) REFERENCES `price` (`id_Price`),
  CONSTRAINT `FK_Type` FOREIGN KEY (`id_Type`) REFERENCES `types` (`id_Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oto`
--

LOCK TABLES `oto` WRITE;
/*!40000 ALTER TABLE `oto` DISABLE KEYS */;
INSERT INTO `oto` VALUES ('OT1','Hyundai Grand i10 Hatchback AT 2021','https://dailyauto.vn/wp-content/uploads/2019/08/danh_gia_xe_hyundai_i10_18.jpg',380000000,'C_T','CO_Hy','T_M','P_1'),('OT10','Kia Morning Xline 2021','https://static.carmudi.vn/files/10-2021/ad413381/ban-kia-morning-gt-line-2021-th-h-m-i-uu-dai-cdhnh-tranh-nhzt-khu-v-c-th-t-c-trcy-gop-nhanh-g-n-1840505396_large.jpeg',799000000,'C_T','CO_K','T_M','P_2'),('OT100','Mercedes-Benz GLE','https://autopro8.mediacdn.vn/2020/2/15/mercedes-benz-gls-450-2020-viet-nam-9-15817251025021331072787-crop-15817251515031958873261.jpg',3999000000,'C_Do','CO_M','T_Su','P_4'),('OT101','Mercedes-Benz G-Class','https://cafefcdn.com/zoom/700_438/203337114487263232/2021/7/20/photo1626750908875-1626750908961334596413.jpeg',10971000000,'C_T','CO_M','T_Su','P_5'),('OT102','Mercedes-Benz G-Class','https://znews-photo.zadn.vn/w660/Uploaded/lce_cjvcc/2020_09_08/Mercedes_Benz_G_350_China_1.jpg',10945000000,'C_De','CO_M','T_Su','P_5'),('OT103','Mercedes-Benz G-Class','http://cms-i.autodaily.vn/du-lieu/2019/03/21/mercedes-g350-2019-2.jpg',10949000000,'C_Do','CO_M','T_Su','P_5'),('OT104','Kia Soluto 2021','https://image-us.24h.com.vn/upload/1-2021/images/2021-01-25/image5-1611557940-871-width620height420.jpg',369000000,'C_T','CO_K','T_Se','P_1'),('OT105','Kia Soluto 2021','https://image-us.24h.com.vn/upload/3-2021/images/2021-07-09/image1-1625801182-623-width650height420.jpg',365000000,'C_De','CO_K','T_Se','P_1'),('OT106','Kia Soluto 2021','https://danchoioto.vn/wp-content/uploads/2020/06/gia-xe-kia-soluto.jpg',368000000,'C_Do','CO_K','T_Se','P_1'),('OT107','Kia Quoris 2021','https://muaxenhanh.vn/wp-content/uploads/2020/03/danh-gia-xe-kia-quoris-2020-xetot-com-12.jpg',199000000,'C_T','CO_K','T_Se','P_3'),('OT108','Kia Quoris 2021','https://dailyauto.vn/wp-content/uploads/2019/09/danh-gia-xe-kia-quoris-1.jpg',1995000000,'C_De','CO_K','T_Se','P_3'),('OT109','Kia Quoris 2021','https://autopro8.mediacdn.vn/2020/12/15/kia-cerato-gia-1608001778147961498309-crop-160800356094754607225.jpg',1999000000,'C_Do','CO_K','T_Se','P_3'),('OT11','Kia Morning Xline 2021','https://sanbonbanh.com/uploads/sellcar/2021_04/l_1616140483.836.jpg',799000000,'C_X','CO_K','T_M','P_2'),('OT110','Kia Sonet 2021','https://static1.cafeland.vn/cafeautoData/upload/tintuc/thitruong/2021/05/tuan-02/kiasonet7cho12-1621099592.jpg',499000000,'C_T','CO_K','T_Su','P_1'),('OT111','Kia Sonet 2021','https://tuvanmuaxe.vn/upload/upload_img/images/kia-sonet-2021-tuvanmuaxe-7.jpg',499500000,'C_De','CO_K','T_Su','P_1'),('OT112','Kia Sonet 2021','https://storage.googleapis.com/f1-cms/2021/06/584bd0e7-20210618_091736.jpg',499000000,'C_Do','CO_K','T_Su','P_1'),('OT113','Kia Seltos 2021','https://autopro8.mediacdn.vn/2021/8/20/hinh-1-1629443965103218925958.jpg',629000000,'C_T','CO_K','T_Su','P_2'),('OT114','Kia Seltos 2021','https://image-us.24h.com.vn/upload/1-2021/images/2021-01-11/Kia-Seltos-2021-ra-mat-gia-cao-hon-nhung-trang-bi-ngheo-nan-hon-9-1610349336-951-width660height440.jpg',629000000,'C_De','CO_K','T_Su','P_2'),('OT115','Kia Seltos 2021','https://cdn.baogiaothong.vn/upload/images/2021-3/article_img/2021-09-14/img-bgt-2021-a-nh-chu-p-ma-n-hi-nh-2021-09-14-lu-c-14-1631603479-width1280height720.jpg',629000000,'C_Do','CO_K','T_Su','P_2'),('OT116','Hyundai Accent 2021','https://cms-i.autodaily.vn/du-lieu/2020/11/23/hyuundai/1.jpg',429000000,'C_T','CO_Hy','T_Se','P_1'),('OT117','Hyundai Accent 2021','https://hyundaichinhhang.com.vn/wp-content/uploads/2019/05/z2215177904307_b902750076b31675621a792bdc4db0cd-scaled.jpg',428000000,'C_De','CO_Hy','T_Se','P_1'),('OT118','Hyundai Accent 2021','https://hyundaiphamhung.com/wp-content/uploads/2021/05/accent-at-2021.jpg',428000000,'C_Do','CO_Hy','T_Se','P_1'),('OT119','Hyundai Elantra 1.6AT','https://hyundaibienhoavn.com/public/userfiles/products/hyundai-elantra-1-6-at-2019.jpg',580000000,'C_T','CO_Hy','T_Se','P_2'),('OT12','Kia Morning Xline 2021','http://xe360.vn/images/muaban/xehoi/26009/kia-morning-2021-hatchback-01.jpg',799000000,'C_Do','CO_K','T_M','P_2'),('OT120','Hyundai Elantra 1.6AT','https://hyundaicar.com.vn/wp-content/uploads/2016/05/z1808760870140_31eb86e09567ee2559a42b37f159176c-1024x682.jpg',585000000,'C_De','CO_Hy','T_Se','P_2'),('OT121','Hyundai Elantra 1.6AT','https://image.thanhnien.vn/w1024/Uploaded/2021/hgnatm/z-ba-hung-2021/thang-6-2021/elantra-giam-gia/hyundai-elantra_thanhnien_ywmv.jpg',589000000,'C_Do','CO_Hy','T_Se','P_2'),('OT122','Hyundai Tucson 2021','https://kenhxehyundai.vn/wp-content/uploads/2017/04/ngoai-that-hyundai-tucson-mau-trang.jpg',799000000,'C_T','CO_Hy','T_Su','P_2'),('OT123','Hyundai Tucson 2021','https://img1.oto.com.vn/2020/10/30/4Cs5VWrI/hyundai-tucson-2021-oto-com-1-e756.jpg',799500000,'C_De','CO_Hy','T_Su','P_2'),('OT124','Hyundai Tucson 2021','https://binhduonghyundai.vn/wp-content/uploads/2020/04/hyundai-tucson-2020.jpg',799000000,'C_Do','CO_Hy','T_Su','P_2'),('OT125','Hyundai SantaFe 2.2','https://media.techz.vn/media2019/source/MLY/2021/Th%C3%A1ng%201/Tu%E1%BA%A7n%202/hyundai-santafe-uu-dai-truoc-ba-4.jpg',1329000000,'C_T','CO_Hy','T_Su','P_3'),('OT126','Hyundai SantaFe 2.2','https://vietnamhyundai.com/wp-content/uploads/2018/04/santafe-2019-22.jpg',1329000000,'C_De','CO_Hy','T_Su','P_3'),('OT127','Hyundai SantaFe 2.2','https://hyundaibienhoavn.com/public/userfiles/products/hyundai-santafe-2-2-dau-cao-cap-2019.jpg',1329000000,'C_Do','CO_Hy','T_Su','P_3'),('OT128','Hyundai Azera','https://salehcars.com/storage/products/out_61619d91e75851633787281.jpg',2129000000,'C_T','CO_Hy','T_Se','P_4'),('OT129','Hyundai Azera','https://roadniche.com/wp-content/uploads/2020/10/2021-Hyundai-Azera-review.jpg',2128000000,'C_De','CO_Hy','T_Se','P_4'),('OT13','Kia Morning AT Deluxe 2021','http://xe360.vn/images/muaban/xehoi/2290/kia-morning-2019-hatchback-01.jpg',349000000,'C_T','CO_K','T_M','P_1'),('OT130','Hyundai Azera','https://cars2021.com/wp-content/uploads/2018/11/Hyundai-Azera-2021-min-1280x720.jpg',2128000000,'C_Do','CO_Hy','T_Se','P_4'),('OT131','Hyundai Veloster','https://www.gannett-cdn.com/-mm-/1e3083e37515e502279992d29637cea2356f9c1b/c=0-261-2996-1954/local/-/media/2018/01/15/DetroitFreeP/DetroitFreePress/636516244157420361-2019-Hyundai-Veloster-01.jpg?width=2996&height=1693&fit=crop&format=pjpg&auto=webp',4080000000,'C_T','CO_Hy','T_Se','P_5'),('OT132','Hyundai Veloster','https://image-us.24h.com.vn/upload/4-2019/images/2019-10-30/Hyundai-Veloster-N---mau-xe-the-thao-hieu-suat-cao-lo-dien-day-du-truoc-ngay-ra-mat-1-1572427976-159-width660height371.jpg',4085000000,'C_De','CO_Hy','T_Se','P_5'),('OT133','Hyundai Veloster','https://cdn.baogiaothong.vn/upload/images/2019-4/album_img/2019-12-05/hyundai-veloster-2020-2-1575545963-width750height500.png',4089000000,'C_Do','CO_Hy','T_Se','P_5'),('OT134','Hyundai Palisade','https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/00_hyundai_palisade_1.jpg/1200px-00_hyundai_palisade_1.jpg',4099000000,'C_T','CO_Hy','T_Su','P_5'),('OT135','Hyundai Palisade','https://cdn.baogiaothong.vn/upload/images/2021-1/album_img/2021-03-31/img-bgt-2021-hyundai-palisade-2021-4-1617130011-width1004height565.jpg',4099500000,'C_De','CO_Hy','T_Su','P_5'),('OT136','Hyundai Palisade','https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/2020_Hyundai_Palisade_front_NYIAS_2019.jpg/1200px-2020_Hyundai_Palisade_front_NYIAS_2019.jpg',4099000000,'C_Do','CO_Hy','T_Su','P_5'),('OT137','Hyundai Sonata 2021','https://img1.oto.com.vn/2017/12/19/4Cs5VWrI/gia-xe-hyundai-sonat-88fb.jpg',1129000000,'C_T','CO_Hy','T_Se','P_3'),('OT138','Hyundai Sonata 2021','https://storage.googleapis.com/f1-cms/2019/01/Sonata-2017.jpg',1129000000,'C_De','CO_Hy','T_Se','P_3'),('OT139','Hyundai Sonata 2021','https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2021/02/27/gia-xe-Hyundai-Sonata-N-Line-2021-1.jpg',1129000000,'C_Do','CO_Hy','T_Se','P_3'),('OT14','Kia Morning AT Deluxe 2021','https://static.carmudi.vn/files/09-2019/ad395761/kia-morning-2019-h-tr-trss-gop-t-100-tri-u-htro-dang-ki-grap-mi-n-phi-450431816_large.jpg',349000000,'C_X','CO_K','T_M','P_1'),('OT140','VinFast Fadil Cao Cấp','https://drive.gianhangvn.com/image/fadil-full-1742344j29769.jpg',509000000,'C_T','CO_V','T_M','P_2'),('OT141','VinFast Fadil Cao Cấp','https://drive.gianhangvn.com/image/444-1742366j29769.jpg',509000000,'C_De','CO_V','T_M','P_2'),('OT142','VinFast Fadil Cao Cấp','https://drive.gianhangvn.com/image/fadil-p-1742343j29769.jpg',509000000,'C_Do','CO_V','T_M','P_2'),('OT143','Honda City 2021','https://picar.vn/wp-content/uploads/2020/11/honda-city-2021-model.jpg',529000000,'C_T','CO_Ho','T_Se','P_2'),('OT144','Honda City 2021','https://media.techz.vn/resize_x500x/media2019/upload2019/2021/05/21/honda-city-2021_21052021093136.jpg',529000000,'C_De','CO_Ho','T_Se','P_2'),('OT145','Honda City 2021','https://hondahanoivn.com/wp-content/uploads/2020/10/Honda_city_2021_rs_honda_tay_ho_-31.jpg',529000000,'C_Do','CO_Ho','T_Se','P_2'),('OT15','Kia Morning AT Deluxe 2021','https://static.carmudi.vn/files/10-2021/ad413410/ban-kia-morning-xline-2021-bi-n-sieu-vip-617878783_large.jpg',349000000,'C_Do','CO_K','T_M','P_1'),('OT16','Honda BRIO 2021','https://static.carmudi.vn/files/10-2020/ad404467/honda-brio-t-ng-goi-km-kh-ng-ch-c-tri-u-v-i-15xtr-nh-n-xe-ngay-t-n-noi-lh-1829844679_large.jpg',448000000,'C_T','CO_Ho','T_M','P_1'),('OT17','Honda BRIO 2021','https://static.carmudi.vn/wp-content/uploads/2021-06/vwQbU4que4.jpg',448000000,'C_C','CO_Ho','T_M','P_1'),('OT18','Honda BRIO 2021','https://static.carmudi.vn/files/03-2021/ad404210/brio-rs-2021-d-mau-giao-ngay-khuy-n-mai-hzp-d-n-h-tr-lai-suzt-vay-thzp-0929-380-413171823_large.jpg',448000000,'C_Do','CO_Ho','T_M','P_1'),('OT19','Toyota Wigo G 2021','https://static.carmudi.vn/files/03-2021/ad404487/toyota-wigo-1-2at-giao-ngay-gia-t-t-h-tr-trcy-g-p-lai-suzt-uu-dai-192282822_large.jpeg',384000000,'C_T','CO_T','T_M','P_1'),('OT2','Hyundai Grand i10 Hatchback AT 2021','https://static.carmudi.vn/files/05-2021/ad406634/0979-877-379-hyundai-i10-gia-r-dua-tru-c-95tr-nh-n-xe-782040737_large.jpg',380000000,'C_C','CO_Hy','T_M','P_1'),('OT20','Toyota Wigo G 2021','https://static.carmudi.vn/files/07-2020/ad358569/toyota-wigo-2021-lh-0926-00-11-654340395_large.jpg',384000000,'C_C','CO_T','T_M','P_1'),('OT21','Toyota Wigo G 2021','https://static.carmudi.vn/files/03-2021/ad381834/toyota-wigo-2020-nang-czp-gia-t-t-nhzt-ha-n-i-xe-d-mau-giao-ngay-tdhi-toyota-hoai-d-c-0941-539-692783305_large.jpg',384000000,'C_Do','CO_T','T_M','P_1'),('OT22','Toyota Camry 2.5Q 2021','https://static.carmudi.vn/files/10-2020/ad400038/toyota-camry-2-5q-m-i-100-gia-uu-dai-km-kh-ng-lh-0908-580-1549021535_large.jpg',2235000000,'C_T','CO_T','T_Se','P_4'),('OT23','Toyota Camry 2.5Q 2021','https://static.carmudi.vn/files/02-2021/ad403775/camry-2021-m-i-tdhi-toyota-an-suong-lh-0906-26-09-95098763_large.jpg',2235000000,'C_De','CO_T','T_Se','P_4'),('OT24','Toyota Camry 2.5Q 2021','https://static.carmudi.vn/files/06-2021/ad406876/toyota-camry-2-0g-2021-h-chi-minh-gicym-ti-n-m-t-t-ng-ph-ki-n-lien-h-ngay-d-nh-n-uu-dai-1680923777_large.JPG',2235000000,'C_Do','CO_T','T_Se','P_4'),('OT25','Toyota Camry 2.0G 2021','https://xetoyotathanhxuan.vn/wp-content/uploads/2020/09/Untitled-222-600x332.jpg',1048000000,'C_T','CO_T','T_Se','P_3'),('OT26','Toyota Camry 2.0G 2021','https://bizweb.dktcdn.net/100/058/631/files/toyota-camry-2020-8.jpg?v=1582122362223',1048000000,'C_De','CO_T','T_Se','P_3'),('OT27','Toyota Camry 2.0G 2021','https://lh3.googleusercontent.com/proxy/zR7rYZibVTzL9RG6apdk7hKtgUXIes75Co9mRX7iVyd2hY8XUDYZDqkhK9rekbOyFj0avkvKtbKJbf0S3rbIdSeQ2VkNht512MDduM7GpTH4IOcjiiYq4oplK0wJkX7Vkd60iiC0iRU9oP2cUicWCvxw4pD1cJsymkxT',1048000000,'C_Do','CO_T','T_Se','P_3'),('OT28','Honda Accord 2021','https://static.carmudi.vn/files/07-2020/ad396464/honda-accord-m-i-2020-ha-n-i-gissm-th-ng-100tr-ti-n-m-t-t-ng-ph-ki-n-cao-czhp-lh-ngay-2074353731_large.jpg',1229000000,'C_T','CO_Ho','T_Se','P_3'),('OT29','Honda Accord 2021','https://static.carmudi.vn/files/10-2020/ad399662/honda-accord-cao-czhp-khuy-n-mai-sieu-sieu-kh-ng-lan-banh-t-t-nhzht-mi-n-nam-lh-0984820509-mr-thanh-1801446667_large.jpg',1229000000,'C_De','CO_Ho','T_Se','P_3'),('OT3','Hyundai Grand i10 Hatchback AT 2021','https://static.carmudi.vn/files/05-2021/ad406620/0979-877-379-hyundai-i10-gia-r-dua-tru-c-95tr-nh-n-xe-1572926031_large.jpg',380000000,'C_X','CO_Hy','T_M','P_1'),('OT31','BMW 740Li 2019','https://static.carmudi.vn/files/10-2021/ad414931/4044%20(1)_large.jpeg',4149000000,'C_T','CO_B','T_Se','P_5'),('OT32','BMW 740Li 2019','https://static.carmudi.vn/files/05-2021/ad406798/ban-bmw-x5-35i-2016-cu-h-chi-minh-1685446435_large.jpg',4149000000,'C_De','CO_B','T_Se','P_5'),('OT33','BMW 740Li 2019','https://static.carmudi.vn/files/10-2021/ad414929/4034%20(1)_large.jpg',4149000000,'C_Do','CO_B','T_Se','P_5'),('OT34','BMW 520i 2016','https://static.carmudi.vn/files/10-2021/ad414931/4044%20(1)_large.jpeg',1349000000,'C_T','CO_B','T_Se','P_3'),('OT35','BMW 520i 2016','https://static.carmudi.vn/files/05-2021/ad406798/ban-bmw-x5-35i-2016-cu-h-chi-minh-1685446435_large.jpg',1349000000,'C_De','CO_B','T_Se','P_3'),('OT36','BMW 520i 2016','https://static.carmudi.vn/files/10-2021/ad414929/4034%20(1)_large.jpg',1349000000,'C_Do','CO_B','T_Se','P_3'),('OT37','BMW X4 2014','https://static.carmudi.vn/files/10-2021/ad414931/4044%20(1)_large.jpeg',2149000000,'C_T','CO_B','T_Se','P_4'),('OT38','BMW X4 2014','https://static.carmudi.vn/files/05-2021/ad406798/ban-bmw-x5-35i-2016-cu-h-chi-minh-1685446435_large.jpg',2149000000,'C_De','CO_B','T_Se','P_4'),('OT39','BMW X4 2014','https://static.carmudi.vn/files/10-2021/ad414929/4034%20(1)_large.jpg',2149000000,'C_Do','CO_B','T_Se','P_4'),('OT4','VinFast Fadil','https://static.carmudi.vn/files/05-2021/ad406442/nulb0913-963-703-vinfast-fadil-lzy-xe-ch-t-56-tri-u-t-ng-ph-ki-n-full-option-576458159_large.jpeg',382000000,'C_C','CO_V','T_M','P_1'),('OT40','Mercedes GLC200','https://static.carmudi.vn/files/06-2020/ad384192/mercedes-glc200-4matic-2020-t-ng-5-thu-tru-c-bdh-gia-sieu-t-t-tang-bhvc-nhi-u-qua-vip-1077349905_large.jpg',1329000000,'C_T','CO_M','T_Se','P_3'),('OT41','Mercedes GLC200','https://static.carmudi.vn/files/10-2021/ad413432/mercedes-glc200-4matic-2021-cu-mau-xam-di-luot-chinh-hang-703659402_large.jpg',1329000000,'C_De','CO_M','T_Se','P_3'),('OT42','Mercedes-Benz GLC300','https://static.carmudi.vn/files/04-2021/ad397105/nulb0946553020-mercedes-benz-glc300-uu-dai-c-c-l-n-trong-thang-1731684114_large.jpg',3649000000,'C_Do','CO_M','T_Se','P_4'),('OT43','Mercedes-Benz GLC300','https://static.carmudi.vn/files/04-2021/ad404826/nulb-09465530201-mercedes-e200-amg-t4-2021-cam-k-t-gia-t-t-lai-suat-uu-dai-nhieu-qua-vip-277148338_large.jpeg',3649000000,'C_De','CO_M','T_Se','P_4'),('OT44','Mercedes-Benz GLC300','https://static.carmudi.vn/files/04-2021/ad404826/nulb-09465530201-mercedes-e200-amg-t4-2021-cam-k-t-gia-t-t-lai-suat-uu-dai-nhieu-qua-vip-1094889464_large.jpeg',3649000000,'C_T','CO_M','T_Se','P_4'),('OT45','Mercedes S450L Luxury 2021','https://static.carmudi.vn/files/04-2021/ad406760/090-8299-829-mercedes-s450l-luxury-2021-uu-dai-ti-n-m-t-goi-qua-t-ng-kh-ng-bao-gia-t-t-63002683_large.jpeg',4949000000,'C_T','CO_M','T_Se','P_5'),('OT46','Honda CRV 2021','https://static.carmudi.vn/files/09-2020/ad385648/honda-cr-v-cao-czhp-2020-sieu-km-xxxtr-giao-ngay-mua-xe-t-ng-xe-thang-1210549154_large.jpg',1118000000,'C_T','CO_Ho','T_Su','P_3'),('OT47','Honda CRV 2021','https://static.carmudi.vn/files/07-2021/ad407326/sieu-khuy-n-mdhi-honda-crv-2021-gicym-200-tri-u-ti-n-m-t-ph-ki-n-lh-0904622245-h-ng-nhung-1252978133_large.jpg',1118000000,'C_Do','CO_Ho','T_Su','P_3'),('OT48','Honda CRV 2021','https://static.carmudi.vn/files/07-2021/ad407326/sieu-khuy-n-mdhi-honda-crv-2021-gicym-200-tri-u-ti-n-m-t-ph-ki-n-lh-0904622245-h-ng-nhung-1686030703_large.jpg',1118000000,'C_De','CO_ho','T_Su','P_3'),('OT49','BMW X3 2020','https://static.carmudi.vn/files/10-2021/ad414180/4036%20(1)_large.jpg',2539000000,'C_T','CO_B','T_Su','P_4'),('OT5','VinFast Fadil','https://static.carmudi.vn/files/04-2021/ad406245/nulb0913-963-703-vinfast-fadil-cam-k-t-gia-t-t-ch-t-56-tri-u-t-ng-ph-ki-n-full-option-201493133_large.jpg',382000000,'C_X','CO_V','T_M','P_1'),('OT50','BMW X3 2020','https://static.carmudi.vn/files/10-2021/ad414182/4038%20(1)_large.jpg',2539000000,'C_De','CO_B','T_Su','P_4'),('OT51','Kia Morning Xline 2021','https://img1.oto.com.vn/2017/11/14/4Cs5VWrI/danh-gia-xe-kia-morn-e74c.jpg',799000000,'C_De','CO_K','T_M','P_2'),('OT52','Kia Morning AT Deluxe 2021','http://xe360.vn/images/muaban/xehoi/10166/kia-morning-2019-hatchback-01.jpg',349000000,'C_De','CO_K','T_M','P_1'),('OT53','Kia Morning GT-Line 2021','https://files01.danhgiaxe.com/ebyDrveUq4aibISrqVnGPoc1yO0=/fit-in/1280x0/20201020/kia-morning-2021-104055.png',430000000,'C_De','CO_K','T_M','P_1'),('OT54','Kia Cerato','https://static.carmudi.vn/files/10-2021/ad415010/kia-cerato-co-xe-giao-ngay-lh-0968-919-622517058_large.jpeg',624000000,'C_Do','CO_K','T_Se','P_2'),('OT55','Kia Cerato','https://static.carmudi.vn/files/06-2021/ad407273/kia-cerato-1-6-at-luxury-2021-gicym-s-c-60tr-lien-h-d-nh-n-them-khuy-n-mai-1184451046_large.jpg',620000000,'C_T','CO_K','T_Se','P_2'),('OT56','Kia Cerato','https://static.carmudi.vn/files/10-2021/ad413369/g-i-ngay-0938985930-d-nh-n-khuy-n-mai-s-c-kia-cerato-2021-dv-ctnh-tranh-nhzht-khu-v-c-1020425323_large.jpeg',625000000,'C_X','CO_K','T_Se','P_2'),('OT57','Kia Cerato','https://danchoioto.vn/wp-content/uploads/2020/10/kia-cerato-2020-co-thiet-ke-the-thao-tre-trung.jpg',630000000,'C_De','CO_K','T_Se','P_2'),('OT58','KIA K3 Luxury','https://cdn-img-v2.webbnc.net/uploadv2/web/89/8958/product/2020/05/13/08/42/1589359361_kia-cerato-1.6luxury-2019---1.jpg',2229000000,'C_Do','CO_K','T_Se','P_4'),('OT59','KIA K3 Luxury','https://kiabacninh5s.com/shop/images/kiabacninh/cerato/kia-cerato-2022-2.jpg',2230000000,'C_T','CO_K','T_Se','P_4'),('OT6','VinFast Fadil','https://static.carmudi.vn/files/05-2021/ad406448/09666-44-131-vinfast-fadil-2021-uu-dti-kh-ng-h-tr-nhanh-chong-m-i-th-t-c-882497574_large.jpeg',382000000,'C_T','CO_V','T_M','P_1'),('OT60','KIA K3 Luxury','https://drive.gianhangvn.com/image/cerato-luxury-bbl-1411658j25917.jpg',2235000000,'C_X','CO_K','T_Se','P_4'),('OT61','KIA K3 Luxury','https://drive.gianhangvn.com/image/bie4pg2-1915032j29813.jpg',2223000000,'C_De','CO_K','T_Se','P_4'),('OT62','KIA Sedona Luxury D','https://drive.gianhangvn.com/image/kia-sedo-na-mau-trang-anh1-1583639j29813.jpg',1149000000,'C_T','CO_K','T_Su','P_3'),('OT63','KIA Sedona Luxury D','https://drive.gianhangvn.com/image/kia-sedona-platinum-1-1016449j25917.jpg',1149000000,'C_De','CO_K','T_Su','P_3'),('OT64','KIA Sedona Luxury G','https://kia.xeone.vn/wp-content/uploads/sites/5/2019/07/kia-sedona-trang-180719-1-10.jpg',1335000000,'C_T','CO_K','T_Su','P_3'),('OT65','KIA Sedona Luxury G','https://img1.oto.com.vn/2018/10/30/2nYr5R9Z/danh-gia-xe-kia-sedo-38d9.jpg',1335000000,'C_De','CO_K','T_Su','P_3'),('OT66','Honda BRIO 2021','https://i.xeoto.com.vn/auto/honda/brio/honda-brio-2020-84394.png',449000000,'C_De','CO_Ho','T_M','P_1'),('OT67','Honda Accord 2021','https://vcdn-vnexpress.vnecdn.net/2020/10/15/2021-Honda-Accord-Hybrid-Top-5551-1602748363.jpg',1329000000,'C_Do','CO_Ho','T_Se','P_3'),('OT68','Vinfast LUX A2.0','https://dailyauto.vn/wp-content/uploads/2019/03/danh-gia-xe-vinfast-lux-a2.0-18-e1591343573563.jpg',1129000000,'C_T','CO_V','T_Se','P_3'),('OT69','Vinfast LUX A2.0','https://giaxevinfastvn.vn/wp-content/uploads/2020/08/than-xe-1024x682.jpg',1115000000,'C_De','CO_V','T_Se','P_3'),('OT7','Kia Morning GT-Line 2021','https://giaxenhap.com/wp-content/uploads/2020/11/morning-gt-1.jpg',430000000,'C_T','CO_K','T_M','P_1'),('OT70','Vinfast LUX A2.0','https://muaxegiatot.vn/wp-content/uploads/2020/06/ban-nang-cap-plus-VinFast-lux-a20-2020-2021-muaxegiatot-vn.jpg',1329000000,'C_Do','CO_V','T_Se','P_3'),('OT71','Vinfast LUX SA2.0','https://dailyauto.vn/wp-content/uploads/2019/03/danh-gia-xe-vinfast-lux-sa2.0-07.jpg',1571000000,'C_T','CO_V','T_Su','P_3'),('OT72','Vinfast LUX SA2.0','https://autobikes.vn/stores/news_dataimages/vantrinh/062020/04/09/4351_Vinfast-lux.jpg',1615000000,'C_De','CO_V','T_Su','P_3'),('OT73','Vinfast LUX SA2.0','https://tuvanmuaxe.vn/upload/upload_img/images/VINFAST-lux-sa-20-suv-2019-viet-nam-tuvanmuaxe-2.jpg',1419000000,'C_Do','CO_V','T_Su','P_3'),('OT74','Vinfast PRESIDENT','https://img1.oto.com.vn/crop/710x582/2021/01/28/20210128175205-ffaa_wm.jpg',3871000000,'C_T','CO_V','T_Su','P_4'),('OT75','Vinfast PRESIDENT','https://never-stand-still.com/wp-content/uploads/2021/06/anh-dai-dien-vinfast-president.jpg',3815000000,'C_De','CO_V','T_Su','P_4'),('OT76','Vinfast PRESIDENT','https://uploads.nguoidothi.net.vn/content/cad09b02-b22b-460b-8029-47feb6c15e62.jpg',3819000000,'C_Do','CO_V','T_Su','P_4'),('OT77','Toyota VIOS 1.5E CVT','https://hdauto.com.vn/wp-content/uploads/2018/06/gia-xe-ban-e-cvt-toyota-vios-2020-xetot-com.jpg',559000000,'C_T','CO_T','T_Se','P_2'),('OT78','Toyota VIOS 1.5E CVT','https://image-us.24h.com.vn/upload/3-2020/images/2020-08-04/anh-thuc-te-Toyota-Vios-2021-tai-dai-ly-sap-ve-Viet-Nam-1-1596507539-356-width660height606.jpg',555000000,'C_De','CO_T','T_Se','P_2'),('OT79','Toyota VIOS 1.5E CVT','https://toyotatancang.net/wp-content/uploads/2020/05/dau-xe-xe-toyota-vios-2021-toyota-tan-cang.jpg',550000000,'C_Do','CO_T','T_Se','P_2'),('OT8','Kia Morning GT-Line 2021','https://sanbonbanh.com/uploads/sellcar/2021_08/l_1626407104.919.jpg',430000000,'C_X','CO_K','T_M','P_1'),('OT80','Toyota COROLLA CROSS 1.8G','https://img1.oto.com.vn/2020/09/07/v9GNb9dV/danh-gia-xe-toyota-corolla-cross-1-8g-2020-oto-com-2cb2.jpg',721000000,'C_T','CO_T','T_Su','P_2'),('OT81','Toyota COROLLA CROSS 1.8G','https://muabanxeford.com.vn/wp-content/uploads/2021/06/toyota-COROLLA-CROSS-2022-moi-mau-xanh.png',725000000,'C_De','CO_T','T_Su','P_2'),('OT82','Toyota COROLLA CROSS 1.8G','https://tuvanmuaxe.vn/upload/upload_img/images/ban-tieu-chuan-toyota-corolla-cross-2020-viet-nam-tuvanmuaxe-3.jpg',719000000,'C_Do','CO_T','T_Su','P_2'),('OT83','Toyota FORTUNER LEGENDER 2.8AT 4X4','https://cdn.dailyxe.com.vn/image/ngoai-that-toyota-fortuner-2021-13-147881j.jpg',1471000000,'C_T','CO_T','T_Su','P_3'),('OT84','Toyota FORTUNER LEGENDER 2.8AT 4X4','https://img1.oto.com.vn/2020/06/05/Vhf1w503/toyota-fortuner-2021-ban-2-4-v-tai-dai-ly-thai-lan-f2b8.jpg',1415000000,'C_De','CO_T','T_Su','P_3'),('OT85','Toyota FORTUNER LEGENDER 2.8AT 4X4','https://i.ytimg.com/vi/XAIpwPH8zus/maxresdefault.jpg',1419000000,'C_Do','CO_T','T_Su','P_3'),('OT86','Toyota LAND CRUISER PRADO VX','https://muaxegiatot.vn/wp-content/uploads/2020/06/gia-xe-toyota-land-prado-2020-2021-muaxegiatot-vn.jpg',2571000000,'C_T','CO_T','T_Su','P_4'),('OT87','Toyota LAND CRUISER PRADO VX','https://toyotatayninh3s.com/wp-content/uploads/2019/12/6-2.jpg',2545000000,'C_De','CO_T','T_Su','P_4'),('OT88','Toyota LAND CRUISER PRADO VX','https://dailytoyotasonglam.com/wp-content/uploads/2018/03/ngoai-that-an-tuong-810595j24740.jpg',2549000000,'C_Do','CO_T','T_Su','P_4'),('OT89','Toyota LAND CRUISER 300','https://img1.oto.com.vn/2021/07/08/OpzfnMD2/land-cruiser-0caa.jpg',4071000000,'C_T','CO_T','T_Su','P_5'),('OT9','Kia Morning GT-Line 2021','https://muaxegiadinh.com/wp-content/uploads/2021/06/kia-morning-gt-line-do-1-1024x768.jpg',430000000,'C_Do','CO_K','T_M','P_1'),('OT90','Toyota LAND CRUISER 300','https://toyotatancangsaigon.vn/wp-content/uploads/2021/08/LC-300-2.jpg',4065000000,'C_De','CO_T','T_Su','P_5'),('OT91','Toyota LAND CRUISER 300','https://cms-i.autodaily.vn/du-lieu/2021/10/05/2022-toyota-land-cruiser-300-officially-launched-in-australia-23-850x567.jpg',4069000000,'C_Do','CO_T','T_Su','P_5'),('OT95','Mercedes-Benz GLB','https://cms-i.autodaily.vn/du-lieu/2020/09/30/GLB%20200/18.jpg',199000000,'C_T','CO_M','T_Su','P_3'),('OT96','Mercedes-Benz GLB','https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/glb/glb-suv/design/exterior/_jcr_content/mediabox/elements/mediaboxelement/asset.MQ6.0.20200723115722.jpeg',1995000000,'C_De','CO_M','T_Su','P_3'),('OT97','Mercedes-Benz GLB','https://otosaigon.com/attachments/mercedes-amg-glb-35-4matic-2019-jpg.1995287/',1999000000,'C_Do','CO_M','T_Su','P_3'),('OT98','Mercedes-Benz GLE','https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/gls/suv-x167/design/designpackages/nightpackage/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ6.12.20200319211652.jpeg',3971000000,'C_T','CO_M','T_Su','P_4'),('OT99','Mercedes-Benz GLE','http://mercedes-vietnam.com/wp-content/uploads/So-s%C3%A1nh-tr%E1%BB%B1c-ti%E1%BA%BFp-Mercedes-Benz-GLS-2020-v%C3%A0-BMW-X7-1.jpg',3995000000,'C_De','CO_M','T_Su','P_4');
/*!40000 ALTER TABLE `oto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price`
--

DROP TABLE IF EXISTS `price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `price` (
  `id_Price` varchar(50) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_Price`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price`
--

LOCK TABLES `price` WRITE;
/*!40000 ALTER TABLE `price` DISABLE KEYS */;
INSERT INTO `price` VALUES ('P_1','Từ 300 triệu đến 500 triệu'),('P_2','Từ 500 triệu đến 1 tỷ'),('P_3','Từ 1 tỷ đến 2 tỷ'),('P_4','Từ 2 tỷ đến 4 tỷ'),('P_5','Trên 4 tỷ');
/*!40000 ALTER TABLE `price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sothich`
--

DROP TABLE IF EXISTS `sothich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sothich` (
  `id_sothich` varchar(50) NOT NULL,
  `desc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_sothich`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sothich`
--

LOCK TABLES `sothich` WRITE;
/*!40000 ALTER TABLE `sothich` DISABLE KEYS */;
INSERT INTO `sothich` VALUES ('S1','Thể thao'),('S2','Du lịch'),('S3','Khám phá, phiêu lưu'),('S4','Công nghệ');
/*!40000 ALTER TABLE `sothich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id_Type` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES ('T_M','Mini/Hatchback'),('T_Se','Sedan'),('T_Su','SUV');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-31  7:25:19
