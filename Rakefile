desc "Fueling"
task :build do
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Right on time"
task :run do
  system("middleman server -p 2233")
end

desc "Aesthetics"
task :sass do
  system("cd source/assets/css && sass --watch styles.scss:styles.css --style compressed")
end