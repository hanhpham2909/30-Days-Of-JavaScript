// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(sentence.match("love"));
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence_1 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence_1.match("because because because"));
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence_4 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence_new = sentence_4.replace(/[!@#$%^&*();?/]/g, '');
console.log(sentence_new);
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentence_5 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentence_5_new = sentence_5.match(/\d+/g).map(Number); //Với .match(/\d+/g) tìm xem phần tử phù hợp với biểu thức chính quy => trả ra  [ '5000', '10000', '15000' ]
let sal1 = sentence_5_new[0];
let sal2 = sentence_5_new[1];
let sal3 = sentence_5_new[1];
let total = sal1+ sal2+sal3;
console.log(sal1, sal2, sal3)
 console.log(total);

