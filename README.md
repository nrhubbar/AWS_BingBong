
Contacts Project
=================
In this document I will list out the Project Requirements, Feature List, and Layout of how it should work.
This is a Simple **CRUD** application: create, read, update, delete.

Requirements
-----------------
 - Home Page
	 - Contact List
	 - New Contact

 - Contact List
	 - Each Item is a Card
	 - Each Card Has A
		 - Contact
		 - Edit Contact Button
		 - Delete Contact Button
	 - Each Contact Has A
		 - Picture
		 - 	Name
		 - Location
		 - Phone Number
 - New Contact
	 -  There will be a new class button with a green '<i class = "icon-plus"></i>'
	 - A Window should pop up
	 - 3 Text Fields with prewritten text for what they are
	 - An Image Upload Icon should be there as well
		 - If no image is provided then set a deafault one
	 - When the user saves the new user it should send a POST to the api to create a user with the info given
		 - to save there will be a another green '<i class = "icon-plus"></i>'
		 - Then insert that user into the DB
		 - Error Handling
 - Edit Contact
	 - Each contact will have an edit button
	 - Same as 'New Contact' but each text field has the old info
	 -  This will send a PUT to the api to update the User
 - Delete Contact
	 - Each Card has red 'U+E800'
