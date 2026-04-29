local playerPoints = {}

mode(function(player)
if not playerPoints[player] then
    playerPoints[player] = 0
end

playerPoints[player] += 1

mode(player, playerPoints[player])
end)
