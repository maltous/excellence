function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pwRJ1r20RF":
        Script1();
        break;
      case "6nYx7HVgosG":
        Script2();
        break;
      case "6SlkkMzFqcj":
        Script3();
        break;
      case "5b4fA0FQt81":
        Script4();
        break;
      case "5ygaVVUhcP3":
        Script5();
        break;
      case "5wqRaPyLGCI":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  window.print();
}

