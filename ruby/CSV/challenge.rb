$commas = (File.read("comma.txt")).gsub(/\,/, "")
class Output
	attr_accessor :first_name, :last_name, :gender, :birth_date, :favorite_color 
	def initialize

	end
	def keyVal
	end
	def empty
	end
end