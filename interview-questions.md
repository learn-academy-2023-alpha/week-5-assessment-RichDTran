# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:I cannot entirely explain what this does, but what i do know is that calling super in a Ruby class is when the "Super" is a parent class and by "calling" it is from a child class. What this child class is calling is attribute from that parent class which may be unique to that parent and can only be accessed by "calling" Here is an example! :

class peanut = (nuts, milk, allergy)
    @nuts = nuts
    @milk = milk
    @allergy = allergy

end

class snack < peanut       <------This is calling from the child class "snack" to the "Super" class = "peanut"
    @variable   = @variable
    @variable   = @variable
    @variable   = @variable
end

Researched answer: It calls on a method with the same name in the parent class "super" It can be viewed as a class having an attribute and many child classes below where the child classes can call upon that MAIN parent class for their attribute. Here is an example.
<!-- class Animal
  def name
    puts "Animal"
  end
end
class Cat < Animal
  def name
    super
  end
end
cat = Cat.new
cat.name
# "Animal" -->
 In this example the parent class is "Animal" and the child class is "Cat"
 Line 31 is calling on the parent class
 Line 33 super is calling on the method in class Animal\
 which explains why class Cat can use cat.name method called upon line 27.

2. What is a gem?

Your answer: A gem is a sort of snippet of code which are managed by a packet manager. They are used to make it easier to use to an application like "presaved code."

Researched answer: There are multiple versions of Ruby gems. They are based on CPU operating systems but if the platform is "Ruby" it will run on any system.  As said before they are snippets of code and there are main components inside of a gem which are:
lib: directory contains the code for the gym
test: contains tests depending which test the developer is using
Rakefile: uses a rake program to automate tests and generate code
And when installing Gem a "README" file is included whic is inline with the code.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a chart or program that has all sorts of data like an excel spreadsheet with columns and rows. Each column and rows are in relation to each other for example a fitness program linking age - height - and weight which can be used to find the outcome of percentage of body fat. The entire layout of all the tables in a database is called a schema.

Researched answer: In a table each row and column are a record in relation to each other and are signed a unique ID. Columns hold attributes of data among data points. There are other kinds of databases which are secondary to the primary database linking to each other and providing vasts amounts of data. For example a college or university needs to keep track of all students and their grades and what classes that they have taken. They create a data base seperate from students and classes linking them to keep TRACK of each students qualifications what has been completed and what grade they have recieved.

4. What are primary keys? Why are they important?

Your answer: Primary keys are the UNIQUE IDs to identify itself to other parts of the database. They are important because it prevents dupilcation and confusion between data. For example "John" is a common name and there could be two in a database. So primary keys help distiguish between the two and so they can always be told apart by their primary key or "Unique ID".

Researched answer: Uniquly identifies each row in a table to be able to inser update or delete from that SPECIFIC row.  There are different types of primary keys which are Generic and Explicit.
Explicit primary key is tied to a single table. 
A Generic primary key can apply to many tables the same attributes as the single table BUT has unique IDs to differentiate.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs is CRUD. Which are:
Create: is the ability to create code for user interface
Read: is the ability to view the code that was created
Update: ability to adjust the code and rendering new code and is able to read
Delete: ability to remove or destroy

Researched answer: They are properly called POST,GET,PUT and DELETE. There are more verbs used but they are used less frequently.Create is used to  create new resources, Get retrieves a representation of a resource. Put updates a resource and delete is used to delete a resource. *Calling a delete a second time will return a 404(NOT FOUND).


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:is a set of standards used in different languages to create reusable efficient routes. It lays out HTTP VERBS in a conventional pattern.Which makes it easier for developers to understand and navigate an applications in clean and reliable URLS.

2. Model validations:In relation to Active Record which is a ruby gem where its translates and converts the use of SQL and quieries and allows ruby to  perform more complex tasks in Rails.. Active record inclues validation features that data can be approved before being accepted.

3. Params:Params refers to parameters being passed through to the controller i.e "GET"  from the websites URL in the users browser. It is a method that returns an object and behaves similarly like an object.

4. ERB: It is a templating system for ruby. Using ERB lets Ruby code to be added to a plain text document and generates document information and/or flow control. Erb recongnizes certain tags like in line ruby code <%--%>  ruby expressions <%= ---%> or a commented ruby code <%# ---- %>

5. API: is a "application program interface" which is a computer program that allows other programs to collaborate with. For example a web application being able to connect with other web applications. Maybe like Instagram connecting to Facebook or Snapchat.
