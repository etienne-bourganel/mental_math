# frozen_string_literal: true

# Game steers all functions for the proper flow of a game
class Game
  def initialize 
  end

  def create_player
    name = gets.chomp.to_s
    @player = Player.new(name)
  end

end
