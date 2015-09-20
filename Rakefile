desc "Fueling"
task :b do
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Right on time"
task :r do
  system("middleman server -p 2233")
end

desc "Aesthetics"
task :s do
  system("cd source/assets/css && sass --watch styles.scss:styles.css --style compressed")
end