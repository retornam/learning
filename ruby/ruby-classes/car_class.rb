class Car
	attr_accessor :color
	@@total_car_count = 0
	def initialize (color)
		@@total_car_count += 1
		@color = color
	end
	def total
		@@total_car_count
	end
	def color?(color)
		@color === color
	end
end
alpha = Car.new("orange")
puts alpha.color?("blue")
puts alpha.color?("orange")
