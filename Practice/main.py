import mysql.connector

class MySQL:
  db=""
  cursor=""
  def __init__(self):
    self.db=mysql.connector.connect(
    host="sql6.freemysqlhosting.net",
    user="sql6481509",
    passwd="TUyHTqlrWq",
    database="sql6481509")

    print("Database Connected")
    
    self.cursor=self.db.cursor()
    
    dropQuery="DROP TABLE IF EXISTS customers;"
    self.cursor.execute(dropQuery)
    
    
    createTable=' CREATE TABLE customers ( customerNumber int(11) NOT NULL, customerName varchar(50) NOT NULL, contactLastName varchar(50) NOT NULL, contactFirstName varchar(50) NOT NULL, phone varchar(50) NOT NULL, addressLine1 varchar(50) NOT NULL, addressLine2 varchar(50) DEFAULT NULL, city varchar(50) NOT NULL, state varchar(50) DEFAULT NULL, postalCode varchar(15) DEFAULT NULL, country varchar(50) NOT NULL, salesRepEmployeeNumber int(11) DEFAULT NULL, creditLimit decimal(10,2) DEFAULT NULL, PRIMARY KEY (customerNumber));'
    self.cursor.execute(createTable)
    
    self.db.commit()

  def read(self):
    print("\nRead Function")
    readQuery="select * from customers;"
    self.cursor.execute(readQuery)
    result=self.cursor.fetchall()
    for i in result:
      print(i)
      
  def write(self):
    print("\nWrite Function")
    writeQuery="insert into customers (customerNumber,customerName,contactLastName,contactFirstName,phone,addressLine1,addressLine2,city,state,postalCode,country,salesRepEmployeeNumber,creditLimit) values (103,'Atelier graphique','Schmitt','Carine ','40.32.2555','54 rue Royale',NULL,'Nantes',NULL,'44000','France',1370,'21000.00');"
    self.cursor.execute(writeQuery)
    self.db.commit()

  def bulkWrite(self):
    print("\nBulkWrite Function")
    bwQuery="insert into customers (`customerNumber`,`customerName`,`contactLastName`,`contactFirstName`,`phone`,`addressLine1`,`addressLine2`,`city`,`state`,`postalCode`,`country`,`salesRepEmployeeNumber`,`creditLimit`) values (112,'Signal Gift Stores','King','Jean','7025551838','8489 Strong St.',NULL,'Las Vegas','NV','83030','USA',1166,'71800.00'), (114,'Australian Collectors, Co.','Ferguson','Peter','03 9520 4555','636 St Kilda Road','Level 3','Melbourne','Victoria','3004','Australia',1611,'117300.00'), (119,'La Rochelle Gifts','Labrune','Janine ','40.67.8555','67, rue des Cinquante Otages',NULL,'Nantes',NULL,'44000','France',1370,'118200.00'), (121,'Baane Mini Imports','Bergulfsen','Jonas ','07-98 9555','Erling Skakkes gate 78',NULL,'Stavern',NULL,'4110','Norway',1504,'81700.00'), (124,'Mini Gifts Distributors Ltd.','Nelson','Susan','4155551450','5677 Strong St.',NULL,'San Rafael','CA','97562','USA',1165,'210500.00'), (125,'Havel & Zbyszek Co','Piestrzeniewicz','Zbyszek ','(26) 642-7555','ul. Filtrowa 68',NULL,'Warszawa',NULL,'01-012','Poland',NULL,'0.00'), (128,'Blauer See Auto, Co.','Keitel','Roland','+49 69 66 90 2555','Lyonerstr. 34',NULL,'Frankfurt',NULL,'60528','Germany',1504,'59700.00'), (129,'Mini Wheels Co.','Murphy','Julie','6505555787','5557 North Pendale Street',NULL,'San Francisco','CA','94217','USA',1165,'64600.00'); "
    self.cursor.execute(bwQuery)
    self.db.commit()


  def update(self):
    print("\nUpdate Function")
    updateQuery="update customers set phone='9898989898' where customerNumber=112;"
    self.cursor.execute(updateQuery)
    
    qry="select * from customers where customerNumber=112;"
    self.cursor.execute(qry)
    result=self.cursor.fetchall()
    for i in result:
      print(i)
      
  def delete(self):
    print("\nDelete Function")
    deleteQuery="delete from customers where customerNumber=112;"
    self.cursor.execute(deleteQuery)

    self.read()


      
sql=MySQL()

sql.write()
sql.read()
sql.bulkWrite()
sql.update()
sql.delete()
