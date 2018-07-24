echo "Spawning 50 augur node processes"

for j in {1..10} ;
do
  for i in {1..5} ;
  do
      ( node ~/gitrepos/augur-app/src/main/bob.js & )
      sleep 10
      echo "sleeping 10 seconds"
  done
  sleep 1200
  echo "sleeping 20 minutes"
done
